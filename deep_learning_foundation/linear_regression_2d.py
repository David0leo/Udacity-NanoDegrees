import numpy as np

def step_gradient(current_b, current_m, points, learning_rate):
	#starting points for our gradients
	b_gradient = 0
	m_gradient = 0

	N = float(len(points))

	for i in range(len(points)):
		x = points[i, 0]
		y = points[i, 1]
		#compute partials
		b_gradient += - (2 / N) * (y - ((current_m * x) + current_b))
		m_gradient += - (2 / N) * x * (y - ((current_m * x) + current_b))
	#make sure to do averages
	new_b = current_b - (learning_rate * b_gradient)
	new_m = current_m - (learning_rate * m_gradient)

	return [new_b, new_m]

def gradient_descent_runner(points, initial_m, initial_b, learning_rate, number_of_iterations):
	#starting points
	b = initial_b
	m = initial_m

	for i in range(number_of_iterations):
		#update b and m with more accurate values by performing gradient descent
		b, m = step_gradient(b, m, np.array(points), learning_rate)
	return [b, m]

def compute_error_for_line_at_given_points(b, m, points):
	#calculate the distance from each point to the line difined by y = mx + b
	#sum the square of the distances, so that positive and convex

	total_error = 0
	for i in range(len(points)):
		x = points[i, 0]
		y = points[i, 1]
		total_error += (y - (m * x + b)) ** 2
	#return the average
	return total_error / float(len(points))

def linear_regression_2D(data_points, initial_b, initial_m, learning_rate, number_of_iterations):
	#train model
	print 'Starting gradient descent at b = {0}, m = {1}, error = {2}'\
			.format(initial_b, initial_m, \
					compute_error_for_line_at_given_points(initial_b, initial_m, data_points))
	b, m = gradient_descent_runner(data_points, initial_b, initial_m, learning_rate, number_of_iterations)
	print 'Starting gradient descent at b = {0}, m = {1}, error = {2}'\
			.format(b, m, \
					compute_error_for_line_at_given_points(initial_b, initial_m, data_points))

def main():
	data_points = np.genfromtxt('data.csv', delimiter=',')
	#hyperparameters
	learning_rate = 0.0001
	number_of_iterations = 1000
	linear_regression_2D(data_points, 0, 0, learning_rate, number_of_iterations)

if __name__ == "__main__":
	main()
