const github = require('@actions/github');

async function addLabels(client, prNumber, labels) {
    console.log('Adding labels:', labels);

    try {
        await client.rest.issues.addLabels({
            owner: github.context.repo.owner,
            repo: github.context.repo.repo,
            issue_number: prNumber,
            labels: labels
        });
    } catch (err) {
        console.log(err);
    }
}

async function removeLabel(client, prNumber, label) {
    console.log('Removing label:', label);

    try {
        await client.rest.issues.removeLabel({
            owner: github.context.repo.owner,
            repo: github.context.repo.repo,
            issue_number: prNumber,
            name: label
        });
    } catch (err) {
        console.log(err);
    }
}

async function createLabel(octokit, inputs) {
    try {
        await octokit.request('GET /repos/{owner}/{repo}/labels/{name}', {
            owner: github.context.repo.owner,
            repo: github.context.repo.repo,
            name: inputs.label
        });
        console.log(`Label ${inputs.label} already exists.`);
    } catch (error) {
        await octokit.request('POST /repos/{owner}/{repo}/labels', {
            owner: github.context.repo.owner,
            repo: github.context.repo.repo,
            name: inputs.label,
            color: inputs.color
        });
        console.log(
            `Created label ${inputs.label} with color ${inputs.color}.`
        );
    }
}

async function getReviews(client, pullNumber) {
    return await client.rest.pulls.listReviews({
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
        pull_number: pullNumber
    });
}

function parseReviews(reviews = []) {
    const parsed = reviews.map((r) => ({
        state: r.state,
        user: r.user.id,
        submitted: new Date(r.submitted_at)
    }));

    const data = {};

    parsed.forEach((p) => {
        if (
            p.state.toLowerCase() !== 'approved' &&
            p.state.toLowerCase() !== 'changes_requested'
        ) {
            return;
        }

        if (data[p.user]) {
            const submitted = data[p.user].submitted;
            data[p.user] = submitted > p.submitted ? data[p.user] : p;
        } else {
            data[p.user] = p;
        }
    });

    return Object.keys(data).map((k) => data[k]);
}

module.exports = {
    addLabels,
    removeLabel,
    createLabel,
    getReviews,
    parseReviews
};
