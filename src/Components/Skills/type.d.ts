export type SkillProps = {
    image: string;
    index: number;
    darkMode: boolean;
    langage: number;
    skillsTypes: string[];
    skillsTypesFr: string[];
    skillsTypesList: string[];
    imageNames: string[];
}

export type ShowMore = {
    showMore: boolean;
    setShowMore: (value: boolean) => void;
    darkMode: boolean;
    langage: number;
}