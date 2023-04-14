export interface RootSceneProps {
  children: any;
}

export interface CentredArticleProps {
  children: any;
}

export interface ProjectProps {
  title: string;
  about: string;
}

export interface ArticleProps extends ProjectProps {
  href: string;
}
