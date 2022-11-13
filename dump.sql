--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: pets; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.pets (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    species character varying(100) NOT NULL,
    sex character varying(100) NOT NULL,
    description character varying(500) NOT NULL,
    "isAvailable" boolean DEFAULT true NOT NULL,
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: pets_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.pets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: pets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.pets_id_seq OWNED BY public.pets.id;


--
-- Name: pets id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pets ALTER COLUMN id SET DEFAULT nextval('public.pets_id_seq'::regclass);


--
-- Data for Name: pets; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.pets VALUES (1, 'Yoru', 'cat', 'female', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', true, '2022-11-13 10:48:45.050801');
INSERT INTO public.pets VALUES (2, 'Hiru', 'cat', 'male', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', true, '2022-11-13 10:48:45.050801');
INSERT INTO public.pets VALUES (3, 'Amy', 'dog', 'female', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', true, '2022-11-13 10:48:45.050801');
INSERT INTO public.pets VALUES (4, 'Spark', 'dog', 'male', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', true, '2022-11-13 10:48:45.050801');
INSERT INTO public.pets VALUES (5, 'Kennie', 'cat', 'male', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', true, '2022-11-13 10:48:45.050801');
INSERT INTO public.pets VALUES (6, 'Teco', 'cat', 'male', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', true, '2022-11-13 10:48:45.050801');
INSERT INTO public.pets VALUES (7, 'Mel', 'dog', 'female', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', true, '2022-11-13 10:48:45.050801');
INSERT INTO public.pets VALUES (8, 'Seb', 'cat', 'male', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', true, '2022-11-13 10:48:45.050801');
INSERT INTO public.pets VALUES (9, 'Rosé', 'dog', 'female', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', true, '2022-11-13 10:48:45.050801');
INSERT INTO public.pets VALUES (10, 'Lisa', 'cat', 'female', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', true, '2022-11-13 10:48:45.050801');
INSERT INTO public.pets VALUES (11, 'Jisoo', 'dog', 'female', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', true, '2022-11-13 10:48:45.050801');
INSERT INTO public.pets VALUES (12, 'Todd', 'cat', 'male', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', true, '2022-11-13 10:48:45.050801');
INSERT INTO public.pets VALUES (13, 'Domenic', 'cat', 'male', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', true, '2022-11-13 10:48:45.050801');
INSERT INTO public.pets VALUES (14, 'Suna', 'cat', 'female', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, '2022-11-13 10:48:45.050801');
INSERT INTO public.pets VALUES (15, 'Maki', 'cat', 'female', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, '2022-11-13 10:48:45.050801');
INSERT INTO public.pets VALUES (16, 'Bolt', 'dog', 'male', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, '2022-11-13 10:48:45.050801');
INSERT INTO public.pets VALUES (17, 'Mei', 'cat', 'female', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, '2022-11-13 10:48:45.050801');
INSERT INTO public.pets VALUES (18, 'Lily', 'cat', 'female', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, '2022-11-13 10:48:45.050801');
INSERT INTO public.pets VALUES (19, 'Jennie', 'dog', 'female', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, '2022-11-13 10:48:45.050801');
INSERT INTO public.pets VALUES (20, 'Bennie', 'dog', 'male', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, '2022-11-13 10:48:45.050801');


--
-- Name: pets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.pets_id_seq', 20, true);


--
-- Name: pets pets_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pets
    ADD CONSTRAINT pets_pk PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

