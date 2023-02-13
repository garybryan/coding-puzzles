---
theme: gaia
class: invert
paginate: true
---

<!-- _class: lead, invert -->

# **Coding Challenges**

---

# **Setting the scene**

We've all left our _cushy bank jobs_...

To start a _business-to-business Software as a Service_ startup!

But we need to **get funded** and **find some clients**.

---

# **Challenge 1: An exclusive party**

We've got wind of an **exclusive IPO party** tonight.

All of Silicon Valley's _hottest investors_ will be there.

We just need to **get in**.

---

# **Part 1: The Password**

The bouncer will only let us in if we know the **password**.

But he's a nice guy really, and he wants to give a _young business_ a chance!

So he gives us a _hint_ about the password...

---

# **A clue**

_"Psst, I'll let you in on a little **secret**!"_

The password is a **word in the English language**!

Luckily, you're carrying a _dictionary_ around in your bag.

As one does.

---

# **The challenge**

We are given _two inputs_:

- `guess(word: string): boolean`
  A _function_ that takes a **word** and returns `true` or `false`.
- `dictionary: string[]`
  An _array_ of just over 370,000 **English words**.

Find the password.

---

# **That would be too easy!**

The bouncer may be a nice guy, but he has his **limits**.

_"370,000 words?!" We don't have all night!"_

Turns out that our algorithm is causing a **bottleneck**.

A long queue of partygoers is forming behind us.

And they're getting _impatient_...

---

# **Part 2: Twenty Questions**

_You only have enough time to guess **20 words**._

But he still wants to help us, so he'll make things a little easier...\_

_This time, when you guess incorrectly, I'll tell you whether the password comes \_before_ or _after_ the word you just guessed, in alphabetical order.\_

---

# **The challenge**

Similarly to before, we are given _two inputs_:

- `guess(word: string): 'correct' | 'before' | 'after'`
  A _function_ that takes a **word** and returns whether:
  - It is correct;
  - _or_, it's incorrect, whether the real password comes **before** or **after** it.
- `dictionary: string[]`
  An _array_ of just over 370,000 **English words**.

Find the password with **20 guesses or fewer**.
