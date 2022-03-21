# Board lukuku

- A simple library for team lukuku

## Requirement

- "react": "^17.0.2",

- "react-dom": "^17.0.2",

## Installation

- you need to install draft-js and react-draft-wysiwyg along with it

```
npm i board-lukuku draft-js react-draft-wysiwyg
```

## Components

- List of components we have

* `<RichEditor />`

  - It lets you have a Rich text editor
  - `props` a function

    - ```
        const handleEditorContent = (content: any) => {
            console.log("content", content);
        };
      ```

  - `returns` a object of block that you've written

* `<TableBoard />` - table component contain table style and pagination

* `<Search />` - A Search form for the table

* `<SayHello />`

  - It's just a test function
  - `props` takes as name
  - `returns` a text Hey `{name}`, say hello to TypeScript.

## Import

- Import css on the top of the component

  ```
  import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

  ```

- Use dynamic method to import components

  ```
  // component hello
  const SayHello = dynamic(
    () => import("board-lukuku").then((mod) => mod.SayHello),
    {
        ssr: false,
        loading: () => <p>...</p>,
    }
  );

  // component RichEditor

  const RichEditor = dynamic(
    () => import("board-lukuku").then((mod) => mod.RichEditor),
    {
        ssr: false,
        loading: () => <p>...</p>,
    }
  );

  // component TableBoard


  const TableBoard = dynamic(
  () => import("board-lukuku").then((mod) => mod.TableBoard),
  {
    ssr: false,
    loading: () => <p>...</p>,
  }
  );

  // component Searche
   const Search = dynamic(
  () => import("board-lukuku").then((mod) => mod.Search),
  {
    ssr: false,
    loading: () => <p>...</p>,
  }
  );

  ```

  ## Usages

```
  const handleEditorContent = (content: any) => {
    console.log("content", content);
  };

    <SayHello name="kjkhkj" />
    <RichEditor handleContent={handleEditorContent} />
    <Search
      placeholder="Search"
      buttonText={<span>Search</span>}
      onFinish
    />
```

## Examples

### example of using RichTextEditor

```
import styled from "styled-components";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Head from "next/head";
import React, { useState, useCallback } from "react";
import dynamic from "next/dynamic";
const RichEditor = dynamic(
    () => import("board-lukuku").then((mod) => mod.RichEditor),
    {
        ssr: false,
        loading: () => <p>...</p>,
    }
  );


export default function () {
  const [data, setData] = useState<any>({
    name: "",
    password: "",
    subject: "",
    body: "",
  });
  const { name, password, subject } = data;
  // internal state
  const handleChange = ({ target: { value, name, files } }) => {
    setData({ ...data, [name]: value });
  };

  // draft
  const handleEditorContent = (content: any) => {
    console.log("content", content);
    setData({ ...data, body: content, articleUpdated: true });
  };

  const Submit = (e) => {
    e.preventDefault();
    console.log("data", data);
  };

  return (
    <>
      <Head>
        <title>Add Post</title>
      </Head>
      <main>
        <Container>
          <Form onSubmit={Submit}>
            {/* top part */}
            <div>
              <Flex>
                <Input
                  placeholder="닉네임"
                  name="name"
                  type="text"
                  value={name}
                  onChange={handleChange}
                />
                <Input
                  placeholder="비밀번호"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleChange}
                />
              </Flex>
              <Input
                placeholder="제목을 입력해 주세요."
                name="subject"
                type="text"
                width="100%"
                value={subject}
                onChange={handleChange}
              />
              <div style={{ margin: "2em 0", opacity: "0.6" }}>
                <small>
                  쉬운 비밀번호를 입력하면 타인의 수정, 삭제가 쉽습니다.
                </small>
                <br />
                <small>
                  음란물, 차별, 비하, 혐오 및 초상권, 저작권 침해 게시물은 민,
                  형사상의 책임을 질 수 있습니다.
                </small>
              </div>
            </div>

            {/* draft part */}
            <div style={{height: "400px"}}>

              <RichEditor handleContent={handleEditorContent} />
            </div>
            <Button type="submit" style={{ marginTop: "2em" }}>
              등록
            </Button>
          </Form>
        </Container>
      </main>
    </>
  );
}

const Form = styled.form`
  padding: 5em;
  margin: 3em;
  border: 2px solid #d5d5d5;
`;
const Flex = styled.div`
  display: flex;
  gap: 1em;
  margin-bottom: 1em;
`;
const Input = styled.input<{
  height?: string;
  width?: string;
}>`
  height: ${({ height }) => height || "33px"};
  width: ${({ width }) => width || "204px"};
  padding: 0 12px;
  line-height: 35px;
  border: 1px solid #cecdce;
  color: #333;
  outline: none;
  box-shadow: none;
  font-size: 13px;
  box-sizing: border-box;
`;

export const Container = styled.div`
  max-width: 1320px;
  width: 94%;
  margin: auto;
  height: 100%;
`;


export const Button = styled.button`
  background: #3b4890;
  border-color: #29367c;
  text-shadow: 0px -1px #1d2761;
  color: #fff;
  height: 40px;
  border-radius: 2px;
  font-size: 14px;
  padding: 2px 24px;
`;

```

### example of using Table

```
import { sampleTablePropsData } from "utils/sample-data";
import { Container } from "styled/Container";
import Link from "next/link";
import dynamic from "next/dynamic";

const TableBoard = dynamic(
  () => import("board-lukuku").then((mod) => mod.TableBoard),
  {
    ssr: false,
    loading: () => <p>...</p>,
  }
);
import { useRouter } from "next/router";

const IndexPage = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      value: (item: any) => <span>{item.id}</span>,
    },
    {
      title: "Title",
      dataIndex: "title",
      value: (item: any) => (
        <Link href={"product/" + item.id}>
          <a>{item.title}</a>
        </Link>
      ),
    },
    {
      title: "Writer",
      dataIndex: "writer",
      value: (item: any) => <span>{item.writer}</span>,
    },
    {
      title: "Viewcount",
      dataIndex: "viewcount",
      value: (item: any) => <span>{item.viewcount}</span>,
    },
  ];

  const router = useRouter();
  const page = router.query.page ? +router.query.page : undefined;

  const settings = {
    data: sampleTablePropsData, //data as json
    columns: columns, // way to use data
    pageSize: 10, // default pagesize is 10
    activePage: 1, // default is 1
    prev: <span>{"<"}</span>, // default is <,
    next: <span>{">"}</span>, // default is >,
    showCode: true, // default is false
    page: page,
    onPageChange: (n) => {
      if (n) {
        router.push(`/?page=${n}`, undefined, { shallow: true });
      }
    }, // required
  };

  return (
    <>
      {/*
        props

      */}
      {/* for now its a only wat to connect pagination and table */}
      <Container>
        <p>table</p>
        <TableBoard {...settings} />
      </Container>
    </>
  );
};

export default IndexPage;


```

### example of using Search

```
 // search Form submit
  const onFinish = (searchText) => {
    router.push(`/?keyword=${searchText}`, undefined, { shallow: true });
  };

  <div style={{ margin: "2em 0" }}>
          <Search
            placeholder="Search"
            buttonText={<span>Search</span>}
            onFinish={onFinish}
          />
        </div>

```
