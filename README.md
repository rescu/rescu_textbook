# rescu_textbook
Lesson plans for pedagogical approaches to scientific computing.

Best to provide at least one chapter on introductory programming practice.

After that, can either organize by mathematical topic (ODE, data analysis, matrices/linear algebra) or organize by physical example-this may be more pedagogical, but less organized in some ways.
## Ch. 0-Introduction
### Introduction to Python/Programming

+ variables
+ arithmetic
+ boolean logic-and,or
+ conditional statements-if,elif,else
+ iteration-for and while loops
+ functions and reusable code; usefulness of functions; classes if theres time
+ good programming practice
+ much of this is best taught by example
+ can provide some Project-Euler-type examples to show how these things are useful

### Plotting-Introduction to Matplotlib

+ how to handle figures/axes-setting figure options
+ good plotting practices
+ using colors, labels, legends
+ plotting in higher dimensions-contour plots, surface plots if there's time
+ scaling variables
+ saving figures versus printing to screen

### Using Numpy and SciPy

+ vectors, arrays, matrices
+ emphasize `linspace`,`arange`,etc.

### LaTeX and Markdown

+ using IPython notebook effectively
+ Markdown syntax
+ LaTeX syntax-formatting equations, usefulness outside of IPython environment
+ differences between Python, IPython notebook-cell evaluation versus standard scripting environment

## Ch. 1-Solving Ordinary Differential Equations (ODEs) by Example

+ briefly describe differential equations
+ basic definition, simple solution methods 
+ avoid calculus-heavy explanations

###Projectile Motion

+ basic projectile motion as starting point
+ move toward example with air resistance

### Simple Harmonic Motion

+ free pendulum
+ damped and driven pendulum
+ double pendulum

### Gravitation and Radially Symmetric Forces

+ two-body problem; could extend to three-body problem if there's time
+ electrostatics

Other chapters could include root-finding methods, matrix inversion/decomposition, Monte-Carlo methods

All should be framed in a context that's easily accessible to high school students; try to always provide good physical motivation for introducing topics.