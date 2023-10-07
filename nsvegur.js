#!/usr/bin/env node
"use strict";

import c from "chalk";
import img from "terminal-image";
import got from "got";
import ww from "word-wrap";
import iq from "inquirer";
import opn from "open";

got("https://nsvegur.me/profile.jpg", {
  responseType: "buffer",
})
  .then(function (image) {
    return img.buffer(image.body, { width: "33%" });
  })
  .then(function (image) {
    console.log(image);
    console.log(
      ww(
        `
Hey, this is ${c.blue.bold("Nagasai Vegur")}👻!

${c.hex("#D35870").bold("Could I Be More ME?")}

I'm a ${c.bgBlue.white.bold(
          "software developer"
        )} and Computer enthusiast experimenting with interfaces in web who's passionate about ${c.bgBlue.white.bold(
          "Data"
        )}.

An innovative individual with zeal for learning something new who enjoys trying out new technologies while listening to ${c
          .hex("#956FE1")
          .bold("13 exclamations")}!


I love ${c.hex("#CCDF65").bold("JavaScript")} and ${c
          .hex("#CCDF65")
          .bold("CPP")}.

`.trim(),
        { width: 200, trim: true }
      )
    );

    console.log("\n\n");
    iq.prompt([
      {
        type: "list",
        message: "Navigate me?",
        name: "open",
        choices: [
          {
            name: c.gray(`💻  What am I cooking? (${c.bold("GitHub")})`),
            value: "https://github.com/NSVEGUR",
          },
          {
            name: c.cyan(`🐦  More Me? (${c.bold("Portfolio Site")})`),
            value: "https://nsvegur.me/",
          },
          {
            name: c.blue(`🏹  What describes me? (${c.bold("Resume")})`),
            value: "https://nsvegur.me/resume",
          },
          { name: c.red("👋  Nope. Bye.\n"), value: false },
        ],
      },
    ])
      .then(function (a) {
        opn(a.open);
        process.exit();
      })
      .catch(function () {});
  })
  .catch(function (e) {
    console.log(e);
  });
