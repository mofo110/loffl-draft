/**
 * Fantasy Pros' page has some JSON rankings under the var ecrData
 *     Overall Rankings  - https://www.fantasypros.com/nfl/rankings/consensus-cheatsheets.php
 */
let output = "Position,Rank,Name,Team,Bye,Tier,Org\n";

getDrafOrder();

function getDrafOrder() {
    const https = require('https');

    const options = {
        hostname: 'www.fantasypros.com',
        port: 443,
        path: '/nfl/rankings/consensus-cheatsheets.php',
        method: 'GET'
    };

    const req = https.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            getData(data);
        });
    });

    req.on('error', (error) => {
        console.error(error);
    });

    req.end();
}

function getData(data) {
    const regex = new RegExp(/var ecrData =(.*?);s\s+var sosData =/);
    const match = regex.exec(data.replaceAll('\n', '\s'));

    if (match) {
        const firstWord = match[1].trim();
        const record = JSON.parse(firstWord);
        getRecord(record);
    } else {
        console.log("No match found.");
    }
}

function getRecord(record) {
    const fs = require('fs');

    record.players.forEach(player => {
        const ranking = {
            position: player.player_positions,
            rank: Number(player.rank_ecr),
            playerName: player.player_name,
            team: player.player_team_id,
            byeWeek: Number(player.player_bye_week),
            tier: Number(player.tier),
            orgName: ""
        };
        getRanking(ranking);
    });

    console.log(output);
    fs.writeFileSync('./data/2025_LOFFL_Draft.csv', output);
}

function getRanking(ranking) {   
    if (ranking.position === 'DST') {
        getTeamRanking(ranking);
    }
    else {
        getInvidualRanking(ranking);
    }
}

function getInvidualRanking(ranking) {
    output += `${ranking.position},${ranking.rank},\
${ranking.playerName},${ranking.team},${ranking.byeWeek},\
${ranking.tier},${ranking.orgName}\n`;
}

function getTeamRanking(ranking) {
    const TEAM_POSITIONS = [
        "DEF",
        "SPT"
    ];

    TEAM_POSITIONS.forEach(position => {
        output += `${position},${ranking.rank},\
${ranking.team} ${position},${ranking.team},${ranking.byeWeek},\
${ranking.tier},${ranking.orgName}\n`;
    });
}