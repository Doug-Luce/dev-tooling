var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "projectName",
        message: "Project Name: ",
        default: this.appname,
      },
    ]);
  }

  writing() {
    this.fs.copyTpl(
      `${this.sourceRoot()}/`,
      `${this.destinationRoot()}/${this.answers.projectName}/`,
      { projectName: this.answers.projectName }
    );
  }
};
