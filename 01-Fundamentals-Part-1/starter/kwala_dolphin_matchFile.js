const firstMatchKwala = 84;
const secondMatchKwala = 91;
const thirdMatchKwala = 110;

const firstMatchDolphin = 96;
const secondMatchDolphin = 108;
const thirdMacthDolphin = 89;


const kwalaAverageScore = (firstMatchKwala + secondMatchKwala + thirdMatchKwala) / 3;
const dolphinAverageScore = (firstMatchDolphin + secondMatchDolphin + thirdMacthDolphin) / 3;

if (kwalaAverageScore > dolphinAverageScore && kwalaAverageScore >= 100) {
    console.log(`the average score of kwalaAverageScore is : ${kwalaAverageScore}
the average score of dolphinAverageScore is : ${dolphinAverageScore}
the kwalas are above the dolphin ${kwalaAverageScore}
the difference between kwalaAverageScore and is dolphinAverageScore is ${kwalaAverageScore- dolphinAverageScore} `);

} else if (dolphinAverageScore > kwalaAverageScore && dolphinAverageScore >= 100) {
    console.log(`Average Score:
kwalaAverageScore: ${kwalaAverageScore}
dolphinAverageScore: ${dolphinAverageScore}
the difference between dolphinAverageScore is ${dolphinAverageScore - kwalaAverageScore} `);

} else if (kwalaAverageScore === dolphinAverageScore && kwalaAverageScore >= 100 && dolphinAverageScore >= 100) {
    console.log(`the scores are equal.
kwala score is ${kwalaAverageScore} and dolphine ${dolphinAverageScore}
score are equal.`);

} else {
    console.log(`their score is less than 100 so no one got the trophy 😱`);
}
