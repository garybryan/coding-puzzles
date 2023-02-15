---
paginate: true
class: invert
---

<style>
    h1, h2 {
        color: var(--heading-strong-color);
    }
    strong, em {
        color: #58a6ff;
    }
</style>

<!-- _class: lead, invert -->

# Coding Challenges

Gary Bryan

---

# The startup

We've all left our _cushy bank jobs_...

To start a _business-to-business Software as a Service_ company!

But we need to **get funded**.

And **find some clients**.

![bg left:50%](images/leaving.jpeg)

---

# An exclusive event

We've got wind of an **IPO party** tonight.

All of the Valley's _VIP investors_ will be there.

We just need to **get in**...

![bg right:45%](images/party.webp)

---

# The password

The bouncer asks us for the **password**.

But he's a nice guy really!

He wants to _help a new business_.

So he gives us a **hint**...

![bg left:40%](images/bouncer.png)

---

# A clue

> "Psst, I'll let you in on a little _secret_!"

The password is an **English word**!

Luckily, you're carrying a **dictionary** around.

![bg right:45%](images/dictionary.jpeg)

As you do at a _party_.

---

# The challenge

Given _two inputs_:

- `guess(word: string): Promise<boolean>`
  A **function** that takes a **word** and returns to `true` or `false`.
- `dictionary: string[]`
  An **array** of just over 370,000 **English words**.

**Find the password**.

---

# A bottleneck

The bouncer may be nice, but he has _limits_.

> "_370,000 words?!_ We don't have all night!"

A queue of partygoers is forming behind us.

And they're getting **impatient**...

![bg left:40%](images/queue.jpeg)

---

# Twenty Questions

You only have enough time to guess **20 words**.

But the bouncer still wants to _help_.

So he'll make things a little **easier**:

> This time, if you guess **incorrectly**,  
> I'll tell you whether the password comes **before** or **after** the word you guessed,
> in **alphabetical order**."

![bg right:40%](images/questions.jpeg)

---

# The challenge

Similarly to before, we are given _two inputs_:

- `guess(word: string): Promise<'correct' | 'before' | 'after'>`
  A **function** that takes a **word** and returns:
  - `'correct'` if the word is correct;
  - `'after'` if the real password comes _after_ the guessed word;
  - `'before'` if the real password comes _before_ it.
- `dictionary: string[]`
  An **array** of just over 370,000 **English words**.

Find the password in **no more than 20 guesses**.

---

# The Social Network

We're in!

And we've spotted a famous _venture capitalist_:

**Monica Hall**!

Let's **talk to her**.

But Monica doesn't talk to _just anyone_.

And besides, we're _awkward engineers_.

We don't talk to **strangers**...

![bg right:42%](images/monica.jpeg)

---

# Degrees of separation

They say everyone is linked by _at most 6 people_.

Monica might be a _friend of a friend of a friend_...

Could we reach her via **mutual friends**?

![bg left:40%](images/social-network.jpeg)

---

# Have you met my friend?

Find the **lowest degree of separation**, via other guests, between you and Monica.

If she were a _friend of a friend of a friend_, the degree would be **3**.

Assume that friendships are **bidirectional**:

> "If you're my friend, then I'm your friend".

---

# The challenge

Given _one input_:

- `getFriends(name: string): string[]`
  A **function** that takes **a person's name**,  
  and returns an **array** of names of that person's **friends** at the party.

`getFriends('Me')` returns **your friends' names**. That's a start!

Find the **minimum degree of separation**.

---

# Wait... what was that _name_ again?

So we know the _degree of separation_.

But we're bad at **remembering names**.

We've _forgotten_ those mutual friends' ones already!

We need to **keep track** of them better.

![bg right:30%](images/names.webp)

---

# The challenge

Given _one input_:

- `getFriends(name: string): string[]`
  A **function** that takes **a person's name**,  
  and returns an **array** of names of that person's **friends** at the party.

Modify the previous solution to return **an array of names** representing the
**shortest path** from you to Monica.

---

# Success!

Monica liked our idea and has offered us a **seed round**!

_We should talk to drunk VCs more often..._

But it barely covers our _initial costs_.

We'd better **become profitable** quickly!

![bg left:33%](images/funding.jpeg)

---

# Mission statement

<style>
img[alt~="center"] {
  display: block;
  margin: 0 auto;
}
</style>

![height:350px center](images/mission.png)

How can we make _as much money as we can_?

We need a **business plan**.

---

# Finding clients

We've done our _networking_.

We've found **40 potential clients**.

The amount we can make from a company depends on its **size**.

**More employees** means **more money**!

![bg left:45%](images/networking.jpeg)

---

# A plan!

Our **sales rep** can acquire **one new client per month**.

And we charge a one-off fee of **$500 per employee**.

How much could we make in **24 months**?

Perhaps it pays to _be greedy_...

![bg right:35%](images/salesman.webp)

---

# Maximum money: Easy mode

Given _one input_:

- `employees: number[]`
  An **array** of numbers of employees per company.

Give the **maximum amount** we can make in **24 months**.

---

# Complicated clients

But if life were that simple, _we'd all be millionaires_...

In reality, some companies are _difficult_.

Convincing them takes **more than a month**.

Our busy salesperson can only negotiate with **one company at a time**.

![bg left:45%](images/negotiation.jpeg)

---

# Maximum money: Normal mode

Given _two inputs_:

- `employees: number[]`
  An **array** of numbers of employees per company.
- `months: number[]`
  An **array** of the numbers of months required to make a sale to each company.  
  (**Whole numbers**)

Give the **maximum amount we can make** in **24 months**.

And do it _efficiently_. We need to be _quick_!

---

# An alternative strategy

But could we do better with a _monthly subscription model_?

Market research shows we can charge **$50 per employee per month**.

_How much could we make this way?_

![bg right:45%](images/business-plan.jpeg)

---

# Maximum money: (NP-)Hard mode

Given _two inputs_:

- `employees: number[]`
  An **array** of numbers of employees per company.
- `months: number[]`
  An **array** of the numbers of months required to make a sale to each company.

Give the **maximum amount** we can make in **24 months** with **monthly subscriptions**.

Your code should _~~be efficient~~ at least not take all day_.

---

# An alternative strategy

Looking **promising**!

But our sales rep is getting _overworked and stressed_.

But if we hired **more salespeople**, we could acquire clients **more quickly**.

Each **additional salesperson** allows us to acquire clients **1 month sooner**  
(With a **minimum time** of one **month**)

---

# Time to hire!

Our original salesperson is happy being paid in _equity_...

But candidates want a **salary** of **$120k per year**.

Salaries are paid **monthly**.

Hiring and training a salesperson takes **one month**, takes up **all current salepeople's** time, and costs a **$20k** one-off recruiter's fee.

We can hire _as many as we need and can afford_.

---

# Maximum money: Silly mode

Given _two inputs_, just like before:

- `employees: number[]`
  An **array** of numbers of employees per company.
- `months: number[]`
  An **array** of the numbers of months required to make a sale to each company.

Give the **maximum amount** we can make in **24 months** with **monthly subscriptions** and the ability to **hire salespeople**?

Your code should _~~be efficient~~ not kill your computer_.
