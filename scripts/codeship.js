#!/usr/bin/env node
/* eslint-disable no-console */

const argv = process.argv.slice(2);
const command = argv[0];

const fs = require('fs');
const readline = require('readline');
const { spawnSync } = require('child_process');

const aesKeyPath = './codeship.aes';
const keyEncoding = 'utf8';

const pkg = require('../package.json');

const { projectId, encryptedFiles } = pkg.codeship;
const projectUrl = `https://app.codeship.com/projects/${projectId}/configure`;

const environmentVariables = {
  committer: {
    email: 'CI_COMMITTER_EMAIL',
    username: 'CI_COMMITTER_USERNAME',
    name: 'CI_COMMITTER_NAME',
  },
  commit: {
    id: 'CI_COMMIT_ID',
    description: 'CI_COMMIT_DESCRIPTION',
    message: 'CI_COMMIT_MESSAGE',
  },
  name: 'CI_NAME',
  time: 'CI_STRING_TIME',
  timestamp: 'CI_TIMESTAMP',
  branch: 'CI_BRANCH',
  projectId: 'CI_PROJECT_ID',
  buildId: 'CI_BUILD_ID',
  ci: 'CI',
  repo: 'CI_REPO_NAME',
};

// Throws if key file isn't found
const readKey = () => fs.readFileSync(aesKeyPath, { encoding: keyEncoding });
const writeKey = k => fs.writeFileSync(aesKeyPath, k, { encoding: keyEncoding });

const promptForKey = () => {
  let aes;
  try {
    aes = readKey();
    console.log(`Read key from ${aesKeyPath}`);
  } catch (err) {
    console.log(`Failed to read AES key from ${aesKeyPath}`);
    console.log(`Navigate to ${projectUrl} and find the AES Key.`);
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question('What is the AES key? ', answer => {
      if (!answer) {
        throw new Error('No AES key provided');
      }
      aes = answer;
      writeKey(answer);
      console.log(`Wrote key to file ${aesKeyPath}`);
      rl.close();
    });
  }
  return aes;
};

const encrypt = () => {
  promptForKey();
  encryptedFiles.forEach(f => {
    console.log(`Encrypting ${f}`);
    spawnSync('jet', ['encrypt', `${f}`, `${f}.encrypted`]);
  });
};

const decrypt = () => {
  promptForKey();
  encryptedFiles.forEach(f => {
    console.log(`Decrypting ${f}.encrypted`);
    spawnSync('jet', ['decrypt', `${f}.encrypted`, `${f}`]);
  });
};

switch (command) {
  case 'encrypt':
    encrypt();
    break;
  case 'decrypt':
    decrypt();
    break;
  default:
    console.log(`Unknown command ${command}`);
}
