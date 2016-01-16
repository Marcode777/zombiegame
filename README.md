# zombiegame
Make a command line zombie game

use https://www.npmjs.com/package/prompt

and utilize a package.json file 

###### user has

* 100 health

* 50 food rations

* 4 damage with weapon of axe

* 0 fifthSense

###### zombies have
* 4 health
* 5 damage

###### general
* there is a days variable
* you have a 50% chance of hitting the zombie
* always a 7% chance for you to encounter zombie
* if you scavenge or encounter a zombie, you lose 1 food

###### user dies
* if you get to 0 food 
* if you get to 0 health

###### scavenge

if fifthSense is < 5
- can find food 1% chance
and
- can find gun 1% chance

if 5 < fifthSense < 7
- can find food 5% chance
and
- can find gun 5% chance

if 7 < fifthSense < 10
- can find food 7% chance
and
- can find gun 7% chance

if fifthSense == 10
- can find food 10% chance
and
- can find gun 10% chance
