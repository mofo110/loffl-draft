# Lazy Owner Fantasy Football League (LOFFL) Draft Order Cheatsheet

## Description

This is my quick and dirty node app to:

* Get overall rankings from [FantasyPros.com](https://www.fantasypros.com)
* Write an output comma delimited file CSV `./<CCYY>_LOFFL_Draft.csv`
* Add special logic to handle Defense and Special Teams

## Requirements

* Node

## Usage

### Step 1: Clone the repo and change to the working directory.

```bash
git clone https://github.com/mofo110/loffl-draft.git
cd loffl-draft
```
### Step 2: Execute to get the draft order.

```bash
node get-draft-order.js
```

### Step 3: Use your favorite CSV tool to review the outpout `./<CCYY>_LOFFL_Draft.csv`.

```console
Position,Rank,Name,Team,Bye,Tier,Org
RB,1,Jahmyr Gibbs,DET,6,1,
RB,2,Bijan Robinson,ATL,11,1,
WR,3,Ja'Marr Chase,CIN,6,1,
WR,4,Puka Nacua,LAR,11,1,
WR,5,Jaxon Smith-Njigba,SEA,11,2,
```

> [!WARNING]
> The DST records are now separate DEF and SPT rows.

```console
DEF,156,HOU DEF,HOU,8,9,
SPT,156,HOU SPT,HOU,8,9,
```