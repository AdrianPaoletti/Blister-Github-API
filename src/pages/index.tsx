import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";

import Header from "@/components/Header/Header";
import RepositoryList from "@/components/RepositoryList/RepositoryList";
import { Repository } from "@/models/repository";
import { LIST_SIZE_PAGE } from "@/utils/constants";

interface HomePageProps {
  repositories: Repository[];
  totalPages: number;
}

const HomePage = ({ repositories, totalPages }: HomePageProps) => {
  return (
    <>
      <Head>
        <title>Prueba Blister</title>
        <link
          rel="icon"
          href="https://github.githubassets.com/favicons/favicon.svg"
        />
      </Head>
      <main>
        <Header />
        <RepositoryList repositories={repositories} totalPages={totalPages} />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query: { name, page, sort },
}) => {
  if (name && name.length) {
    console.log(sort);
    const {
      data: { items, total_count },
    } = await axios.get("https://api.github.com/search/repositories", {
      params: { q: name, per_page: LIST_SIZE_PAGE, page, sort },
    });
    return {
      props: {
        repositories: items,
        totalPages: Math.ceil(total_count / LIST_SIZE_PAGE),
      },
    };
  }
  return {
    props: {
      repositories: null,
      totalPages: null,
    },
  };
};

export default HomePage;
