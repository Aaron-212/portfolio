---
title: Typlet rendering test
date: 2026-10-12
---

A collection of mathematical expressions ranging from simple to extremely complex, using **Typst math syntax**.

## Level 1 — Basic Expressions

### 1.1 Arithmetic

$ a + b = c $

$ x^2 + y^2 = z^2 $

$ E = m c^2 $

$ a_1 + a_2 + dots + a_n $

### 1.2 Fractions and Radicals

$$
x = (-b plus.minus sqrt(b^2 - 4 a c)) / (2 a)
$$

$$
sqrt(x^2 + y^2) = r
$$

$$
root(3, x^3 + 1)
$$

### 1.3 Greek Letters

$$
alpha + beta + gamma + delta = pi
$$

$$
theta = omega t + phi
$$

$$
Delta x = x_2 - x_1
$$

## Level 2 — Intermediate Expressions

### 2.1 Limits

$$
lim_(x -> 0) (sin x)/x = 1
$$

$$
lim_(n -> infinity) (1 + 1/n)^n = e
$$

### 2.2 Summations and Products

$$
sum_(k=1)^n k = (n(n+1))/2
$$

$$
sum_(k=0)^infinity 1/k! = e
$$

$$
product_(k=1)^n k = n!
$$

### 2.3 Integrals

$$
integral_0^1 x^2 dif x = 1/3
$$

$$
integral_(-infinity)^infinity e^(-x^2) dif x = sqrt(pi)
$$

### 2.4 Piecewise Functions

$$
f(x) = cases(
  x^2 & "if " x >= 0,
  -x & "if " x < 0,
)
$$

## Level 3 — Advanced Expressions

### 3.1 Matrices

$$
A = mat(
  1, 2, 3;
  4, 5, 6;
  7, 8, 9;
)
$$

$$
A = mat(
  a_11, a_12, dots.h, a_(1n);
  a_21, a_22, dots.h, a_(2n);
  dots.v, dots.v, dots.down, dots.v;
  a_(m 1), a_(m 2), dots.h, a_(m n);
)
$$

### 3.2 Determinants

$$
det(mat(
  a, b;
  c, d;
)) = a d - b c
$$

### 3.3 Aligned Equations

$$
f(x) &= (x+1)^2 \
     &= x^2 + 2x + 1 \
     &= x(x+2) + 1
$$

### 3.4 Vector Calculus

$$
nabla f =
mat(
  (partial f)/(partial x);
  (partial f)/(partial y);
  (partial f)/(partial z);
)
$$

$$
nabla^2 f =
(partial^2 f)/(partial x^2) +
(partial^2 f)/(partial y^2) +
(partial^2 f)/(partial z^2)
$$

## Level 4 — Complex Expressions

### 4.1 Fourier Transform

$$
hat(f)(xi) =
integral_(-infinity)^infinity
f(x) e^(-2 pi i x xi) dif x
$$

### 4.2 Gaussian Distribution

$$
f(x | mu, sigma^2) =
1 / sqrt(2 pi sigma^2)
exp(-((x-mu)^2)/(2 sigma^2))
$$

### 4.3 Schrödinger Equation

$$
i planck (partial Psi(bold(r),t))/(partial t)
=
[-(planck^2)/(2m) nabla^2 + V(bold(r),t)]
Psi(bold(r),t)
$$

### 4.4 Navier–Stokes Equation

$$
rho (
  (partial bold(u))/(partial t)
  + (bold(u) dot nabla) bold(u)
)
=
-nabla p
+ mu nabla^2 bold(u)
+ bold(f)
$$

### 4.5 Continued Fraction

$$
phi = 1 + 1 / (
  1 + 1 / (
    1 + 1 / (
      1 + 1 / (
        1 + dots
      )
    )
  )
)
$$

## Level 5 — Very Complex Expressions

### 5.1 Einstein Field Equations

$$
R_(mu nu) - 1/2 R g_(mu nu)
+ Lambda g_(mu nu)
=
(8 pi G)/(c^4) T_(mu nu)
$$

### 5.2 Riemann Curvature Tensor

$$
R^rho_(sigma mu nu)
=
partial_mu Gamma^rho_(nu sigma)
-
partial_nu Gamma^rho_(mu sigma)
+
Gamma^rho_(mu lambda) Gamma^lambda_(nu sigma)
-
Gamma^rho_(nu lambda) Gamma^lambda_(mu sigma)
$$

### 5.3 Multidimensional Gaussian Integral

$$
integral_(RR^n)
exp(
  -1/2 bold(x)^T A bold(x)
  + bold(b)^T bold(x)
)
dif^n bold(x)
=
sqrt((2 pi)^n / det(A))
exp(1/2 bold(b)^T A^(-1) bold(b))
$$

### 5.4 Generalized Eigenvalue Decomposition

$$
det(A - lambda B)
=
sum_(sigma in S_n)
"sgn"(sigma)
product_(i=1)^n
(A_(i sigma(i)) - lambda B_(i sigma(i)))
= 0
$$

## Level 6 — Extremely Complex Expressions

### 6.1 Deeply Nested Expression

$$
F(x) =
(
  sum_(n=1)^infinity
  (
    (-1)^(n+1) / n
    (
      integral_0^x
      (
        e^(-t^2)
        /
        (
          1 +
          (
            sum_(k=1)^n
            t^(2k) / k!
          )
        )
      )
      dif t
    )^n
  )
)
/
(
  sqrt(
    1 +
    (
      integral_0^1
      (
        sum_(m=0)^infinity
        (-1)^m x^(2m) / (2m)!
      )
      dif x
    )^2
  )
)
$$

### 6.2 Large Matrix

$$
M = mat(
  A_11, A_12, dots.h, A_(1n);
  A_21, A_22, dots.h, A_(2n);
  dots.v, dots.v, dots.down, dots.v;
  A_(n 1), A_(n 2), dots.h, A_(n n);
)
$$

### 6.3 Nested Summations and Integrals

$$
cal(F)(alpha, beta, gamma)
=
sum_(n=0)^infinity
sum_(k=0)^n
(-1)^k
binom(n,k)
/
Gamma(alpha n + beta k + gamma)
times
integral_0^infinity
(
  x^(alpha n + beta k)
  e^(-x)
  /
  (
    1 + x^2 +
    sum_(j=1)^n
    x^j / j!
  )
)
dif x
$$

### 6.4 Complex Tensor Expression

$$
T^(mu nu)_(alpha beta)
=
sum_(rho=0)^3
sum_(sigma=0)^3
g^(mu rho) g^(nu sigma)
(
  R_(rho alpha sigma beta)
  -
  1/2
  g_(rho sigma)
  R_(alpha beta)
)
+
Lambda
(
  delta^mu_alpha delta^nu_beta
  -
  delta^mu_beta delta^nu_alpha
)
$$

## Level 7 — Maximum Stress Tests

### 7.1 Large Delimiters Surrounding Nested Matrices

$$
A =
lr(
  mat(
    sum_(i=1)^n a_i,
    integral_0^infinity e^(-x^2) dif x,
    lim_(x -> 0) (sin x)/x;

    product_(k=1)^m k!,
    sqrt(1 + sqrt(1 + sqrt(1+x))),
    sum_(j=0)^infinity x^j/j!;

    (partial^2 f)/(partial x partial y),
    det(mat(a,b;c,d)),
    integral_0^1 integral_0^1
      (x^2+y^2) dif x dif y;
  )
)
$$

### 7.2 Infinite Series with Deeply Nested Operators

$$
S =
sum_(n=1)^infinity
(
  product_(k=1)^n
  (
    1 +
    1 /
    (
      k^2 +
      sum_(j=1)^k
      (
        integral_0^1
        x^(j-1)
        (1-x)^(k-j)
        dif x
      )
    )
  )
)
/
(
  n! +
  sqrt(
    sum_(m=0)^n
    binom(n,m)^2
  )
)
$$

### 7.3 Differential Geometry and Tensor Calculus

$$
cal(S)[g, phi]
=
integral_cal(M)
sqrt(-det(g_(mu nu)))
[
  1/(16 pi G)
  (
    R
    -
    2 Lambda
    +
    alpha R^2
    +
    beta R_(mu nu) R^(mu nu)
  )
  -
  1/2
  g^(mu nu)
  (nabla_mu phi)
  (nabla_nu phi)
  -
  V(phi)
]
dif^4 x
$$

### 7.4 Maximum Nesting Depth

$$
X =
sqrt(
  1 +
  1 / (
    1 +
    sqrt(
      2 +
      1 / (
        1 +
        sqrt(
          3 +
          1 / (
            1 +
            sqrt(
              4 +
              1 / (
                1 +
                sqrt(
                  5 +
                  1 / (
                    1 +
                    sqrt(
                      6 +
                      1 / (
                        1 +
                        sqrt(7+x)
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  )
)
$$

### 7.5 Quantum Field Theory

$$
Z[J] =
integral cal(D) phi
exp(
  i / planck
  [
    integral_(RR^4)
    (
      1/2
      partial_mu phi
      partial^mu phi
      -
      1/2 m^2 phi^2
      -
      lambda/(4!)
      phi^4
      +
      J(x) phi(x)
    )
    dif^4 x
  ]
)
\
=
sum_(n=0)^infinity
(i/planck)^n / n!
integral
product_(k=1)^n
(
  dif^4 x_k J(x_k)
)
chevron.l
T product_(k=1)^n phi(x_k)
chevron.r
$$
