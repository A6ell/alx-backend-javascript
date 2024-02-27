/**
 * Contains the miscellaneous route handlers.
 * @author Iyasu Asnake <https://github.com/Iyasu2>
 */
class AppController {
  static getHomepage(request, response) {
    // Set the response status to 200
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
