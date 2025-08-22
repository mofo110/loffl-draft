## Lazy Owner Fantasy Football League (LOFFL) Draft Order Cheatsheet

This is my quick and dirty node app to:

* Get overall rankings from FantasyPros.com
* Write an output comma delimited file CSV `.data/2025_LOFFL_Draft.csv`
* Add special logic to handle Defense and Special Teams

## Requirements

* Node

## Common setup

Step 1: Clone the repo and change to the working directory.

```bash
git clone https://github.com/mofo110/loffl-draft.git
cd loffl-draft
```
Step 2: Execute to get the draft order.

```bash
node get-draft-order.js
```

Step 3: Use your favorite CSV tool to review the outpout `./data/2025_LOFFL_Draft.csv`.

```console
Position,Rank,Name,Team,Bye,Tier,Org
WR,1,Ja'Marr Chase,CIN,10,1,
RB,2,Bijan Robinson,ATL,5,1,
RB,3,Saquon Barkley,PHI,9,1,
WR,4,CeeDee Lamb,DAL,10,1,
RB,5,Jahmyr Gibbs,DET,8,1,
```

> [!WARNING]
> The DST records are now separate DEF and SPT row
> DEF,153,DEN DEF,DEN,12,9,
> SPT,153,DEN SPT,DEN,12,9,