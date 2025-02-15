import * as core from "@actions/core";
import * as github from "@actions/github";

try {
    const name = core.getInput("who-to-greet");
    const output_value = `Hello ${name}!`;
    core.setOutput("greeting", output_value);
} catch (error) {
    core.setOutput(error.message);
}
