/**
 * Miscellaneous route handlers.
 * @author Abel Demere <https://github.com/ab-ruh>
 */
class AppController {
  static getHomepage(request, response) {
    // Set the response status to 200
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
