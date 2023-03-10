import CircleIcon from "@mui/icons-material/Circle";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";

import { Repository } from "@/models/repository";
import styles from "./RepositoryCard.module.scss";

interface RepositoryCardProps {
  repository: Repository;
}

const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  return (
    <article className={styles["repository-card"]}>
      <div className={styles["repository-card__container"]}>
        <div className={styles["repository-card__information"]}>
          <div className={styles["repository-card__main-information"]}>
            <h2 className={styles["repository-card__repo-name"]}>
              {repository.name}
            </h2>
            <span className={styles["repository-card__user-name"]}>
              {repository.owner.login}
            </span>
          </div>
          <p className={styles["repository-card__description"]}>
            {repository.description || "-- No description provided --"}
          </p>
          <div className={styles["repository-card__dates-information"]}>
            <p>
              <span>Created: </span> {repository.created_at.toString()}
            </p>
            <p>
              <span>Last Update: </span> {repository.updated_at.toString()}
            </p>
          </div>
        </div>
        <div className={styles["repository-card__image"]}>
          <img src={repository.owner.avatar_url} alt="avatar" width={90} />
        </div>
      </div>
      <div className={styles["repository-card__information"]}>
        <div className={styles["repository-card__secondary-information"]}>
          <div className={styles["repository-card__language-container"]}>
            <CircleIcon
              fontSize="small"
              className={styles["repository-card__circle-icon"]}
            />
            <p className={styles["repository-card__language"]}>
              {repository.language}
            </p>
          </div>
          <div className={styles["repository-card__stars-container"]}>
            <StarOutlineOutlinedIcon
              fontSize="small"
              className={styles["repository-card__star-icon"]}
            />
            <p className={styles["repository-card__stars"]}>
              {repository.stargazers_count}
            </p>
          </div>
        </div>
        <ul className={styles["repository-card__topics-information"]}>
          {repository.topics.map((topic: string, index: number) => (
            <li key={index}>{topic.toUpperCase()}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default RepositoryCard;
