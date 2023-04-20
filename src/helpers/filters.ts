export const types: string[] = [
    /* 0 */ "relaxing",
    /* 1 */ "mobility",
    /* 2 */ "stretching",
    /* 3 */ "pilates",
    /* 4 */ "cardio",
    /* 5 */ "dance",
    /* 6 */ "fullBody",
    /* 7 */ "upperBody",
    /* 8 */ "downBody",
    /* 9 */ "arms",
    /* 10 */ "back",
    /* 11 */ "abs&core",
    /* 12 */ "legs",
    /* 13 */ "booty",

];

interface ILevels {
    level: "beginner" | "normal" | "sweat"
    color: string
}

export const levels: ILevels[] = [
    {
        // 0
        level: "beginner",
        color: "#d1fae5"
    },
    {
        // 1
        level: "normal",
        color: "#dbeafe"
    },
    {
        // 2
        level: "sweat",
        color: "#ffe4e6"
    }
]