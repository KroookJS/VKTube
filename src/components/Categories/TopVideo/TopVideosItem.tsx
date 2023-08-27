import Link from "next/link";
import styles from "./TopVideo.module.scss";
/* 
const div = styled.div`
  width: 100%;
  display: flex;

  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #7c776
  
  border-radius: 20px;
  filter: drop-shadow(2px 2px 18px #91669c73);

  @media (min-width: 769px) {
    flex-direction: column;
  }
`;

const ImgTopList = styled.img`
  max-height: 88px;
  border-radius: 20px;
  width: 120px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.09);
    font-weight: 600;
  }
  @media (min-width: 768px) {
    max-height: 77px;
    width: 120px;
  }
  @media (min-width: 1024px) {
    max-height: 79px;
    width: 128px;
  }
  @media (min-width: 1224px) {
    max-height: 100px;
    width: 169px;
  }
`;

const TextTop = styled.h3`
  font-size: 18px;
  font-weight: 300;
  min-width: 182px;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (min-width: 320px) {
    min-width: 44px;
  }
  @media (min-width: 370px) {
    min-width: 85px;
  }
  @media (min-width: 400px) {
    min-width: 185px;
  }
  @media (min-width: 768px) {
    min-width: 240px;
  }
`;
export const IndexBlock = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-image: var(--colors-line-topChart);
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  border: 2px solid;

  @media (min-width: 769px) {
    position: absolute;
    left: 8px;
    top: -5px;
    border: 2px solid;
  }
`;
 */
export const TopVideosItem = ({
  image,
  title,
  href,
  index,
}: {
  href: string;
  image: string;
  title: string;
  index: number;
}) => {
  return (
    <Link href={`/details/${href}`}>
      <div className={styles.WrapperTopChart}>
        <img
          className={styles.ImgTopList}
          src={"http://37.1.219.168:4444" + image}
        />
        <h3 className={styles.TextTop}>{title}</h3>

        <div className={styles.IndexBlock}>{index}</div>
      </div>
    </Link>
  );
};
