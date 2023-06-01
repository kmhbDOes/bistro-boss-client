/**
 * ******Basic*******
 * Normal users shouldn't see private links
 * Only admin can see the admin links
 * Normal users shouldn't be able to access private links by typing url
 * Use AdminRoute that will check whether user is admin or not
 * If not admin redirect to any other page  or logout user and redirect to login page
 * 
 * ******To Send Data********
 * Verify jwt Token (Send authorization token in the header to the server)
 * If possible use axios to send jwt token by intercepting the request
 * If it's and admin, Make sure only admin is posting data bys using verifyAdmin
 * 
 */