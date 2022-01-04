export type VideoProps = {
  createdAt: string;
  id: string;
  title: string;
  description: string;
  seen: boolean;
  slug: string;
  tags: string[];
  thumbnail: {
    url: string;
  };
  mp4: {
    url: string;
  };
};

export type AccountProps = {
  username: string;
  avatar: { url: string };
};
