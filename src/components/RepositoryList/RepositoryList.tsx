import moment from "moment";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import { CircularProgress, Pagination } from "@mui/material";

import { Repository } from "@/models/repository";
import RepositoryCard from "../RepositoryCard/RepositoryCard";
import styles from "./RepositoryList.module.scss";
import { MAX_TOTAL_PAGES } from "@/utils/constants";
import SearcherContext from "@/store/context/SearcherContext";

interface RepositoryListProps {
  repositories: Repository[];
  totalPages: number;
}

const RepositoryList = ({ repositories, totalPages }: RepositoryListProps) => {
  const router = useRouter();
  const [page, setPage] = useState<number>();
  const { updateRouter, setIsLoading, isLoading } = useContext(SearcherContext);
  const normalizedTotalPages =
    totalPages > MAX_TOTAL_PAGES ? MAX_TOTAL_PAGES : totalPages;

  useEffect(() => {
    setIsLoading(false);
    const queryPage = router.query?.page;
    if (queryPage?.length && Number(queryPage)) {
      const x = +queryPage;
      setPage(x);
    }
  }, [repositories]);

  const handleChange = (event: ChangeEvent<unknown>, page: number) => {
    setIsLoading(true);
    updateRouter({ page });
    setPage(page);
  };

  const formatDate = (date: Date | string) => {
    return moment(date).format("ll");
  };

  return (
    <section className={styles["repository-list"]}>
      <div className={styles["repository-list__head"]}>
        <div className={styles["repository-list__container-title"]}>
          <CollectionsBookmarkOutlinedIcon
            className={styles["repository-list__icon"]}
          />
          <h2 className={styles["repository-list__title"]}>Repositories</h2>
        </div>
      </div>
      {isLoading && (
        <div className={styles["repository-list__loader"]}>
          <CircularProgress
            color="primary"
            size={"5rem"}
            className={styles["repository-list__loader-icon"]}
          />
        </div>
      )}
      {repositories && (
        <div className={styles["repository-list__container-cards"]}>
          <ul className={styles["repository-list__cards"]}>
            {repositories.map((repository) => {
              const formatedRepository = {
                ...repository,
                created_at: formatDate(repository.created_at),
                updated_at: formatDate(repository.created_at),
              };
              return (
                <li key={formatedRepository.id}>
                  <a href={repository.html_url} target="_blank">
                    <RepositoryCard repository={formatedRepository} />
                  </a>
                </li>
              );
            })}
          </ul>
          {page && (
            <div className={styles["repository-list__page-buttons"]}>
              <Pagination
                count={normalizedTotalPages}
                shape="rounded"
                color="primary"
                page={page}
                onChange={handleChange}
              />
            </div>
          )}
        </div>
      )}
      {!repositories?.length && !isLoading && (
        <div className={styles["repository-list__not-found"]}>
          <h3>No repositories</h3>
        </div>
      )}
    </section>
  );
};

export default RepositoryList;
