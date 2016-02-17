module.exports = function(robot) {
  
  robot.respond(/pom me/i, function(message) {
    robot
      .http("http://pombombs.herokuapp.com/random")
      .get()(function(err, res, body) {
        return message.send(JSON.parse(body).pom);
      });
  });

  robot.respond(/pom bomb( (\d+))?/i, function(message) {
    var count = message.match[2] || 5;
    robot
      .http("http://pombombs.herokuapp.com/bomb?count=" + count)
      .get()(function(err, res, body) {
        JSON.parse(body).poms.forEach(function(pom) {
          message.send(pom);
        });
      });
  });

};