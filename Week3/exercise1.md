# Exercise-1

> Question-1: What columns violate 1NF?

**1NF Rules:**

1. All data must be atomic (every column should only contain a single value)
2. Repeating columns are not allowed
3. Prevent duplicate records (by applying primary keys)
4. Attribute domain should not change (all values in a column must be of the same kind or type).

**Answer:**

- member_id: Violates rule 3 because of same ids
- member_address: Violates rule 1 because it has house number and street name together
- dinner_date: Violates rule 4 because date formats are different
- food_code,food_description: Violates rule 1 because it contains many values

---

> Question-2: What entities do you recognize that could be extracted?

**Answer:**

**Member, Dinner, Venue,** and **Food** entities could be extracted as a separated table.

---

> Question-3: Name all the tables and columns that would make a 3NF compliant solution.

**Answer:**

_Table 1: member_

| PK(id) | name   | address    |
| ------ | ------ | ---------- |
| 1      | Furkan | 12 streetA |
| 2      | John   | 24 StreetB |

_Table 2: dinner_

| PK(id) | date             | FK(venue.code) |
| ------ | ---------------- | -------------- |
| 1      | 06-05-2022 12:00 | C01            |
| 2      | 04-05-2022 17:00 | C02            |

_Table 3: food_

| PK(code) | description |
| -------- | ----------- |
| F1       | Falafel     |
| S1       | Soup        |

_Table 4: venue_

| PK(code) | description             |
| -------- | ----------------------- |
| C01      | French Dish Restaurant  |
| C02      | Turkish Dish Restaurant |

_Table 5: order_

| PK(id) | FK(member.id) | FK(dinner.id) | FK(food.code) | quantity |
| ------ | ------------- | ------------- | ------------- | -------- |
| 1      | 1             | 1             | S1            | 2        |
| 2      | 1             | 1             | F1            | 3        |
| 3      | 2             | 2             | S1            | 1        |
