---
layout: frontpage
title: How To Simulate A Rocket
description: Understanding aerospace simulation and modeling rocket flight with open source tools and methods
page: simulate
---

# How To Simulate A Rocket Flight

<span class="subtitle" markdown="1">_Understanding Aerospace Simulation_</span>

--------------------------------------------------------------------------------

When first trying to simulate rockets I made a lot of mistakes. Numerical simulation is a little bit of an esoteric field. The very basics are often covered in technical and hard science undergraduate courses, however this usually won't cover practical skills needed to deal with real-world issues one would encounter in a complex problem like rocket flight.

Modern aerospace simulation is the culmination of over 60 years of knowledge and technique.




**Table of Contents:**

* Table of Contents
{:toc}


## Naïve Approach 1: Simulate Absolutely Everything

_Pretend we know what every molecule in the universe is doing._

Often, when I think of really high fidelity simulations I assume that the computer is really simulating every possible thing at once. Every bit of air moving over the vehicle, the interaction of fuel and oxidiser molecules in the engine, subtle shifting and bending of very single bolt and fin panel of the rocket body.

In fact it's pretty tempting to try and apply this method, after all there already exists fluid dynamics simulations that will compute the flow of air in 3 dimensions. They look really cool too. And most good computer-aided design packages include programs to compute the theoretical strength of any part. So why is it not done this way?

It's too hard! No, really. The fluid dynamics and mechanical simulations currently take hours or even days on a reasonably powerful machine, just for simulating one single instant in time! And since each future step depends on the previous already being known you can't make this a parallel computation where you throw lots of cores at it in a big data center.

Taking this approach is impractical not only because of the complexity of actually combining all the different algorithms, but on even a very high end computer a full simulation might take several **centuries** to complete.



## Naïve Approach 2: C<sub><small>D</small></sub> = 0.8

_Everything is a sphere._

The opposite solution is to ignore most of the interesting physics that goes on during a launch and get a "back of the envelope" simulation. This is the official "Undergraduate Physics Major Solution"&trade; and, though it probably won't get you to orbit, it is actually quite useful in many situations!

When simplifying it's worth asking what is worth simulating, and what isn't.


## A Middle Ground

_Simplify aerodynamics, enough, but not too much._



## Aerodynamics

stuff

### Barroman

### CFD


## Equations Of Motion (Solvers)

How to run a sim.


### RK4

The most popular.

Gotchya's: Energy loss.

## How The Pros Do It

_What Would NASA Do?_


### Divide And Conquer

 Concept to include in simulation | Model | Source
 ---------------------------------| --------- | ---------
 **Earth**                        | WGS84 | Standard
 **Gravity**                      | WGS84 | Standard
 **Base Atmosphere**              | ISA1974 | Standard
 **Wind**                         | ?? | ??
 **Aerodynamics (lift/drag)**     | Modeling | Barroman, wind tunnel
 **Mass model**                   | Modeling | Open Rocket Document
 **Thermal**                      | ?? | ??
 **Engine Thrust**                | ?? | ??
 **Instruments**                  | Gaussian noise + bias | JSBSim
 **Solver**                       | RK4                   | JSBSim
