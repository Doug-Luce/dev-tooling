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
    const filesToCopy = ["package.json", "webpack.config.js"];
    filesToCopy.map((file) => {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(`${this.answers.projectName}/${file}`),
        { projectName: this.answers.projectName }
      );
    });

    this.fs.copy(
      this.templatePath("index.js"),
      this.destinationPath(`${this.answers.projectName}/src/index.js`)
    );
    this.fs.copy(
      this.templatePath("styles.css"),
      this.destinationPath(`${this.answers.projectName}/src/styles.css`)
    );
  }
};
