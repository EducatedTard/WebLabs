import base64
from flask import Flask, jsonify, make_response, request, abort

app = Flask(__name__)

users = [
	{
		'username' : 'Ferp',
		'password' : '123banane',
		'email' : 'ferp@gmail.com'
	},
	{
		'username' : 'Jax',
		'password' : 'ilovecatzzz888',
		'email' : 'jax@gmail.com'
	},
	{
		'username' : 'UserAdoption7',
		'password' : 'lululululu',
		'email' : 'useradoption7@gmail.com'
	}
]

@app.after_request
def after_request(data):
	response = make_response(data)
	response.headers['Content-Type'] = 'application/json'
	response.headers['Access-Control-Allow-Origin'] = '*'
	response.headers['Access-Control-Allow-Headers'] = "Origin, X-Requested-With, Content-Type, Accept, Authorization"
	return response

@app.errorhandler(400)
def bad_request(error):
    return make_response(jsonify( { 'error': 'Bad Request' } ), 400)

@app.errorhandler(401)
def unauthorized(error):
    return make_response(jsonify( { 'error': 'Wrong username or password.' } ), 401)

@app.errorhandler(403)
def forbidden(error):
    return make_response(jsonify( { 'error': 'Bad token value' } ), 403)

@app.route('/authorize', methods = ['POST'])
def authorize():
	if not request.json or not 'username' in request.json or not 'password' in request.json:
		abort(400)
	username = request.json['username']
	password = request.json['password']

	print username
	print password

	decoded_password = base64.b64decode(password)

 	print decoded_password
	for user in users :
		if user['username'] == username:
			if user['password'] == decoded_password:
				return jsonify( { 'token': generate_token(username, decoded_password) } ), 201
			else:
				abort(403)
	else:
		abort(401)

def generate_token(username, password):
	return base64.b64encode(username + password)

def is_token_valid(token):
	for user in users :
		if generate_token(user['username'], user['password']) == token:
			return True
	else:
		return False

@app.route('/userprofile', methods = ['GET'])
def get_user_profile():
    token = request.args.get('token')
    print(is_token_valid(token))

    decoded_token = base64.b64decode(token)

    for user in users :
        if decoded_token == user['username'] + user['password']:
            username = user['username']
            email = user['email']

    print username
    print email

    return jsonify( { 'username': username,
                        'email': email} )

if __name__ == '__main__':
    app.run(debug = True)
