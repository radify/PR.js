export default class Message {

  parse(pull) {
    return pull.commits[0].commit.message.split("\n");
  }
}