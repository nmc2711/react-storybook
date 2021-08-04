import React, { useEffect, useState } from "react";
import axios from "axios";

export interface InfiniteProps {
query: string;
pageNumber?: number;
url: string;
}

export default function InfiniteScroll(props: InfiniteProps) {
const { query, pageNumber, url } = props;

const [loading, setLoading] = useState<boolean>(true);
const [error, setError] = useState<boolean>(false);
const [list, setList] = useState<any[]>([]);
const [hasMore, setHasMore] = useState<boolean>(false);

useEffect(() => {
setLoading(true);
setError(false);

    let cancel: any;

    axios({
      method: "GET",
      url,
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setList((prevList) => {
          return [
            ...new Set([
              ...prevList,
              ...res.data.docs.map((b: any) => b.title),
            ]),
          ];
        });
        setHasMore(res.data.docs.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });

    return () => cancel();

}, [query, pageNumber]);

return { loading, error, list, hasMore };
}
