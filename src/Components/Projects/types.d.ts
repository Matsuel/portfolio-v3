export type ProjectType = {
    title: string;
    githubLink: string;
    description: string;
    publicRepo: boolean;
}

export type ProjectsProps = {
    title: string;
    githubLink: string;
    description: string;
    publicRepo: boolean;
    index: number;
    Images: string[],
    darkMode: boolean,
    ViewMore: string,
    ViewLight: string,
    ViewPrivate: string,
}