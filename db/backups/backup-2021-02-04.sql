--
-- PostgreSQL database dump
--

-- Dumped from database version 12.5 (Debian 12.5-1.pgdg100+1)
-- Dumped by pg_dump version 13.1

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
-- Name: Coach; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Coach" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    handle text NOT NULL,
    name text NOT NULL,
    "teamId" integer,
    type text,
    "isAssistant" text
);


ALTER TABLE public."Coach" OWNER TO tundera;

--
-- Name: Coach_id_seq; Type: SEQUENCE; Schema: public; Owner: tundera
--

CREATE SEQUENCE public."Coach_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Coach_id_seq" OWNER TO tundera;

--
-- Name: Coach_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tundera
--

ALTER SEQUENCE public."Coach_id_seq" OWNED BY public."Coach".id;


--
-- Name: ColorScheme; Type: TABLE; Schema: public; Owner: tundera
--

CREATE TABLE public."ColorScheme" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "primary" text NOT NULL,
    secondary text NOT NULL,
    "teamId" integer
);


ALTER TABLE public."ColorScheme" OWNER TO tundera;

--
-- Name: ColorScheme_id_seq; Type: SEQUENCE; Schema: public; Owner: tundera
--

CREATE SEQUENCE public."ColorScheme_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ColorScheme_id_seq" OWNER TO tundera;

--
-- Name: ColorScheme_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tundera
--

ALTER SEQUENCE public."ColorScheme_id_seq" OWNED BY public."ColorScheme".id;


--
-- Name: Player; Type: TABLE; Schema: public; Owner: tundera
--

CREATE TABLE public."Player" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    handle text NOT NULL,
    name text NOT NULL,
    slug text NOT NULL,
    "teamId" integer,
    height text NOT NULL,
    weight text NOT NULL,
    number text,
    "position" text
);


ALTER TABLE public."Player" OWNER TO tundera;

--
-- Name: Player_id_seq; Type: SEQUENCE; Schema: public; Owner: tundera
--

CREATE SEQUENCE public."Player_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Player_id_seq" OWNER TO tundera;

--
-- Name: Player_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tundera
--

ALTER SEQUENCE public."Player_id_seq" OWNED BY public."Player".id;


--
-- Name: Team; Type: TABLE; Schema: public; Owner: tundera
--

CREATE TABLE public."Team" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    handle text NOT NULL,
    name text NOT NULL,
    slug text NOT NULL,
    city text NOT NULL,
    abbreviation text NOT NULL,
    logo text NOT NULL,
    wins integer,
    losses integer,
    "winPercentage" numeric(65,30),
    conference text NOT NULL,
    division text NOT NULL,
    established text NOT NULL,
    "primaryColor" text NOT NULL,
    "secondaryColor" text NOT NULL,
    "logoSlug" text
);


ALTER TABLE public."Team" OWNER TO tundera;

--
-- Name: Team_id_seq; Type: SEQUENCE; Schema: public; Owner: tundera
--

CREATE SEQUENCE public."Team_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Team_id_seq" OWNER TO tundera;

--
-- Name: Team_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tundera
--

ALTER SEQUENCE public."Team_id_seq" OWNED BY public."Team".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: tundera
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO tundera;

--
-- Name: Coach id; Type: DEFAULT; Schema: public; Owner: tundera
--

ALTER TABLE ONLY public."Coach" ALTER COLUMN id SET DEFAULT nextval('public."Coach_id_seq"'::regclass);


--
-- Name: ColorScheme id; Type: DEFAULT; Schema: public; Owner: tundera
--

ALTER TABLE ONLY public."ColorScheme" ALTER COLUMN id SET DEFAULT nextval('public."ColorScheme_id_seq"'::regclass);


--
-- Name: Player id; Type: DEFAULT; Schema: public; Owner: tundera
--

ALTER TABLE ONLY public."Player" ALTER COLUMN id SET DEFAULT nextval('public."Player_id_seq"'::regclass);


--
-- Name: Team id; Type: DEFAULT; Schema: public; Owner: tundera
--

ALTER TABLE ONLY public."Team" ALTER COLUMN id SET DEFAULT nextval('public."Team_id_seq"'::regclass);


--
-- Data for Name: Coach; Type: TABLE DATA; Schema: public; Owner: tundera
--

COPY public."Coach" (id, "createdAt", "updatedAt", handle, name, "teamId", type, "isAssistant") FROM stdin;
1	2020-11-03 19:17:13.702	2020-11-03 19:17:13.703	202603	Lloyd Pierce	1	Head Coach	1
2	2020-11-03 19:17:13.702	2020-11-03 19:17:13.703	1628770	Matt Hill	1	Assistant Coach	2
3	2020-11-03 19:17:13.703	2020-11-03 19:17:13.704	2607	Chris Jent	1	Assistant Coach	2
4	2020-11-03 19:17:13.704	2020-11-03 19:17:13.705	1628764	Scottie Parker	1	Trainer	3
5	2020-11-03 19:17:13.71	2020-11-03 19:17:13.711	203785	Greg Foster	1	Assistant Coach	2
6	2020-11-03 19:17:13.708	2020-11-03 19:17:13.709	2384	Melvin Hunt	1	Assistant Coach	2
7	2020-11-03 19:17:13.707	2020-11-03 19:17:13.707	1831	Marlon Garnett	1	Assistant Coach	2
8	2020-11-03 19:17:13.726	2020-11-03 19:17:13.727	1630017	John Dusel	1	Assistant Trainer	4
9	2020-11-03 19:17:15.581	2020-11-03 19:17:15.582	1627329	Scott Morrison	2	Assistant Coach	2
10	2020-11-03 19:17:15.581	2020-11-03 19:17:15.581	203535	Brad Stevens	2	Head Coach	1
11	2020-11-03 19:17:15.582	2020-11-03 19:17:15.582	203168	Jay Larranaga	2	Assistant Coach	2
12	2020-11-03 19:17:15.582	2020-11-03 19:17:15.583	202979	Jamie Young	2	Assistant Coach	2
13	2020-11-03 19:17:15.587	2020-11-03 19:17:15.587	1628807	Brandon Bailey	2	Assistant Coach	2
14	2020-11-03 19:17:15.588	2020-11-03 19:17:15.589	1628210	Joe Mazzulla	2	Assistant Coach	2
15	2020-11-03 19:17:15.591	2020-11-03 19:17:15.591	1628765	Art Horne	2	Trainer	3
16	2020-11-03 19:17:15.593	2020-11-03 19:17:15.594	1627590	Jerome Allen	2	Assistant Coach	2
17	2020-11-03 19:17:17.94	2020-11-03 19:17:17.941	959	Steve Nash	3	Head Coach	1
18	2020-11-03 19:17:17.94	2020-11-03 19:17:17.941	1783	Mike D'Antoni	3	Assistant Coach	2
20	2020-11-03 19:17:17.942	2020-11-03 19:17:17.942	1627876	Adam Harrington	3	Assistant Coach	2
19	2020-11-03 19:17:17.941	2020-11-03 19:17:17.942	1629412	Dan Liburd	3	Assistant Coach	2
21	2020-11-03 19:17:17.942	2020-11-03 19:17:17.943	1627510	Travon Bryant	3	Assistant Coach	2
22	2020-11-03 19:17:17.943	2020-11-03 19:17:17.944	1628766	Lloyd Beckett	3	Trainer	3
23	2020-11-03 19:17:17.946	2020-11-03 19:17:17.946	202588	Jacque Vaughn	3	Lead Assistant Coach	13
24	2020-11-03 19:17:17.948	2020-11-03 19:17:17.948	203152	Ime Udoka	3	Assistant Coach	2
25	2020-11-03 19:17:17.949	2020-11-03 19:17:17.95	1627877	Jordan Ott	3	Assistant Coach	2
26	2020-11-03 19:17:17.954	2020-11-03 19:17:17.955	203596	Bret Brielmaier	3	Assistant Coach	2
28	2020-11-03 19:17:17.957	2020-11-03 19:17:17.958	203550	Sebastien Poirier	3	Trainer	3
27	2020-11-03 19:17:17.959	2020-11-03 19:17:17.959	201168	Tiago Splitter	3	Assistant Coach for Player Development	12
30	2020-11-03 19:17:19.808	2020-11-03 19:17:19.808	203753	Ronald Nored	4	Assistant Coach	2
29	2020-11-03 19:17:19.807	2020-11-03 19:17:19.808	202602	Chad Iske	4	Assistant Coach	2
31	2020-11-03 19:17:19.808	2020-11-03 19:17:19.809	201666	Dennis Williams	4	Assistant Trainer	4
32	2020-11-03 19:17:19.807	2020-11-03 19:17:19.807	202435	James Borrego	4	Head Coach	1
33	2020-11-03 19:17:19.827	2020-11-03 19:17:19.828	2472	Jay Triano	4	Assistant Coach	2
34	2020-11-03 19:17:19.83	2020-11-03 19:17:19.831	101278	Joe Sharpe	4	Trainer	3
35	2020-11-03 19:17:19.832	2020-11-03 19:17:19.832	204035	Jay Hernandez	4	Assistant Coach	2
36	2020-11-03 19:17:23.054	2020-11-03 19:17:23.055	204031	Joshua Longstaff	5	Assistant Coach	2
38	2020-11-03 19:17:23.053	2020-11-03 19:17:23.054	2394	Pete Myers	5	Assistant Coach	2
37	2020-11-03 19:17:23.052	2020-11-03 19:17:23.053	1627310	Billy Donovan	5	Head Coach	1
39	2020-11-03 19:17:23.055	2020-11-03 19:17:23.056	203809	Shawn Respert	5	Assistant Coach	2
40	2020-11-03 19:17:23.077	2020-11-03 19:17:23.078	1627604	Chris Fleming	5	Assistant Coach	2
41	2020-11-03 19:17:23.079	2020-11-03 19:17:23.079	2511	Mike Wilhelm	5	Assistant Coach	2
42	2020-11-03 19:17:23.081	2020-11-03 19:17:23.081	1312	Maurice Cheeks	5	Assistant Coach	2
43	2020-11-03 19:17:25.498	2020-11-03 19:17:25.499	2794	JB Bickerstaff	6	Head Coach	1
44	2020-11-03 19:17:25.499	2020-11-03 19:17:25.5	202565	Mike Gerrity	6	Assistant Coach	2
45	2020-11-03 19:17:25.5	2020-11-03 19:17:25.501	1629110	Dan Geriot	6	Assistant Coach	2
46	2020-11-03 19:17:25.501	2020-11-03 19:17:25.502	1629710	Lindsay Gottlieb	6	Assistant Coach	2
47	2020-11-03 19:17:25.503	2020-11-03 19:17:25.504	1800	Damon Jones	6	Assistant Coach	2
48	2020-11-03 19:17:25.506	2020-11-03 19:17:25.506	204023	James Posey	6	Assistant Coach	2
49	2020-11-03 19:17:25.508	2020-11-03 19:17:25.508	204238	Antonio Lang	6	Assistant Coach	2
50	2020-11-03 19:17:25.509	2020-11-03 19:17:25.509	204286	Stephen Spiro	6	Trainer	3
51	2020-11-03 19:17:27.099	2020-11-03 19:17:27.1	1320	Rick Carlisle	7	Head Coach	1
52	2020-11-03 19:17:27.1	2020-11-03 19:17:27.101	2152	Stephen Silas	7	Assistant Coach	2
53	2020-11-03 19:17:27.101	2020-11-03 19:17:27.102	202599	Darrell Armstrong	7	Assistant Coach	2
54	2020-11-03 19:17:27.102	2020-11-03 19:17:27.102	2871	Dionne Calhoun	7	Assistant Trainer	4
55	2020-11-03 19:17:27.105	2020-11-03 19:17:27.106	1628782	Mike Weinar	7	Assistant Coach	2
56	2020-11-03 19:17:27.107	2020-11-03 19:17:27.108	202427	Jamahl Mosley	7	Assistant Coach	2
57	2020-11-03 19:17:27.109	2020-11-03 19:17:27.109	2868	Casey Smith	7	Trainer	3
58	2020-11-03 19:17:28.954	2020-11-03 19:17:28.955	2610	Michael Malone	8	Head Coach	1
59	2020-11-03 19:17:28.955	2020-11-03 19:17:28.955	202430	Mark Price	8	Assistant Coach	2
60	2020-11-03 19:17:28.955	2020-11-03 19:17:28.956	203600	David Adelman	8	Assistant Coach	2
61	2020-11-03 19:17:28.956	2020-11-03 19:17:28.957	203391	Ryan Bowen	8	Assistant Coach	2
63	2020-11-03 19:17:28.958	2020-11-03 19:17:28.959	203165	Bob Weiss	8	Assistant Coach	2
62	2020-11-03 19:17:28.957	2020-11-03 19:17:28.958	1627167	Dan Shimensky	8	Trainer	3
64	2020-11-03 19:17:28.976	2020-11-03 19:17:28.976	1018	Wes Unseld	8	Assistant Coach	2
65	2020-11-03 19:17:28.977	2020-11-03 19:17:28.978	203759	Jordi Fernandez	8	Assistant Coach	2
66	2020-11-03 19:17:28.979	2020-11-03 19:17:28.979	202894	Charles Klask	8	Assistant Coach	2
67	2020-11-03 19:17:30.835	2020-11-03 19:17:30.836	1335	Dwane Casey	9	Head Coach	1
68	2020-11-03 19:17:30.835	2020-11-03 19:17:30.836	1226	Sidney Lowe	9	Assistant Coach	2
69	2020-11-03 19:17:30.836	2020-11-03 19:17:30.837	1336	Tim Grgurich	9	Assistant Coach	2
70	2020-11-03 19:17:30.836	2020-11-03 19:17:30.837	201678	Jim Scholler	9	Trainer	3
71	2020-11-03 19:17:30.838	2020-11-03 19:17:30.838	204230	Tim Hardaway	9	Assistant Coach	2
72	2020-11-03 19:17:30.843	2020-11-03 19:17:30.844	204085	Sean Sweeney	9	Assistant Coach	2
73	2020-11-03 19:17:30.847	2020-11-03 19:17:30.847	202101	Micah Nori	9	Assistant Coach	2
74	2020-11-03 19:17:32.981	2020-11-03 19:17:32.981	204005	Steve Kerr	10	Head Coach	1
75	2020-11-03 19:17:32.981	2020-11-03 19:17:32.982	1658	Mike Brown	10	Assistant Coach	2
76	2020-11-03 19:17:32.982	2020-11-03 19:17:32.982	204260	Bruce Fraser	10	Assistant Coach	2
77	2020-11-03 19:17:32.982	2020-11-03 19:17:32.983	1627666	Chris DeMarco	10	Assistant Coach for Player Development	12
78	2020-11-03 19:17:32.983	2020-11-03 19:17:32.984	1796	Ron Adams	10	Assistant Coach	2
79	2020-11-03 19:17:32.985	2020-11-03 19:17:32.985	204239	Jarron Collins	10	Assistant Coach	2
80	2020-11-03 19:17:32.986	2020-11-03 19:17:32.986	1628227	Drew Yoder	10	Trainer	3
81	2020-11-03 19:17:34.959	2020-11-03 19:17:34.96	1628180	Dan Hartfield	11	Assistant Coach	2
82	2020-11-03 19:17:34.961	2020-11-03 19:17:34.962	1786	John Lucas	11	Assistant Coach	2
84	2020-11-03 19:17:34.96	2020-11-03 19:17:34.961	202897	Brett Gunning	11	Assistant Coach	2
94	2020-11-03 19:17:38.853	2020-11-03 19:17:38.853	203243	Casey Hill	13	Assistant Coach	2
97	2020-11-03 19:17:38.855	2020-11-03 19:17:38.856	101280	John Welch	13	Assistant Coach	2
101	2020-11-03 19:17:38.859	2020-11-03 19:17:38.859	1672	Rex Kalamian	13	Assistant Coach	2
104	2020-11-03 19:17:40.961	2020-11-03 19:17:40.961	1628472	Miles Simon	14	Assistant Coach	2
126	2020-11-03 19:17:47.704	2020-11-03 19:17:47.704	1371	Mike Budenholzer	17	Head Coach	1
130	2020-11-03 19:17:47.707	2020-11-03 19:17:47.707	1628784	Pat St. Andrews	17	Assistant Coach	2
145	2020-11-03 19:17:52.05	2020-11-03 19:17:52.051	2008	Aaron Nelson	19	Trainer	3
147	2020-11-03 19:17:52.052	2020-11-03 19:17:52.053	2630	Bob Beyer	19	Assistant Coach	2
149	2020-11-03 19:17:52.056	2020-11-03 19:17:52.056	1629432	Todd Campbell	19	Assistant Trainer	4
152	2020-11-03 19:17:54.238	2020-11-03 19:17:54.239	1628179	Royal Ivey	20	Assistant Coach	2
156	2020-11-03 19:17:54.241	2020-11-03 19:17:54.242	1627939	Jud Buechler	20	Assistant Coach	2
160	2020-11-03 19:17:54.254	2020-11-03 19:17:54.255	1370	Roger Hinds	20	Trainer	3
162	2020-11-03 19:17:56.08	2020-11-03 19:17:56.08	1629758	Dave Bliss	21	Assistant Coach	2
191	2020-11-03 19:18:03.5	2020-11-03 19:18:03.5	203170	Dale Osbourne	25	Assistant Coach	2
194	2020-11-03 19:18:03.503	2020-11-03 19:18:03.503	203782	Chris Stackpole	25	Assistant Coach	2
196	2020-11-03 19:18:03.505	2020-11-03 19:18:03.505	101272	Geoff Clark	25	Trainer	3
203	2020-11-03 19:18:06.653	2020-11-03 19:18:06.654	873	Gregg Popovich	27	Head Coach	1
212	2020-11-03 19:18:08.083	2020-11-03 19:18:08.084	1356	Scott McCullough	28	Trainer	3
219	2020-11-03 19:18:09.83	2020-11-03 19:18:09.831	101203	Eric Waters	29	Trainer	3
227	2020-11-03 19:18:11.233	2020-11-03 19:18:11.233	203601	Mike Terpstra	30	Assistant Coach	2
229	2020-11-03 19:18:11.236	2020-11-03 19:18:11.237	201665	MIke Longabardi	30	Assistant Coach	2
231	2020-11-03 19:18:11.239	2020-11-03 19:18:11.239	1629411	Jeff Bangs	30	Trainer	3
85	2020-11-03 19:17:34.977	2020-11-03 19:17:34.977	1322	Elston Turner	11	Assistant Coach	2
87	2020-11-03 19:17:34.983	2020-11-03 19:17:34.984	203241	Matt Brase	11	Assistant Coach	2
93	2020-11-03 19:17:38.852	2020-11-03 19:17:38.853	202978	Tyronn Lue	13	Head Coach	1
96	2020-11-03 19:17:38.854	2020-11-03 19:17:38.855	2814	Brendan O'Connor	13	Assistant Coach	2
100	2020-11-03 19:17:38.857	2020-11-03 19:17:38.858	202893	Dee Brown	13	Assistant Coach	2
111	2020-11-03 19:17:42.757	2020-11-03 19:17:42.758	203624	Taylor Jenkins	15	Head Coach	1
127	2020-11-03 19:17:47.704	2020-11-03 19:17:47.705	203005	Darvin Ham	17	Assistant Coach	2
132	2020-11-03 19:17:47.71	2020-11-03 19:17:47.711	201692	Scott Faust	17	Trainer	3
177	2020-11-03 19:17:59.992	2020-11-03 19:17:59.992	974	Joseph Blair	23	Assistant Coach	2
179	2020-11-03 19:17:59.995	2020-11-03 19:17:59.995	201220	David Joerger	23	Assistant Coach	2
181	2020-11-03 19:17:59.998	2020-11-03 19:17:59.999	1360	Kevin Johnson	23	Trainer	3
189	2020-11-03 19:18:03.499	2020-11-03 19:18:03.499	1337	Terry Stotts	25	Head Coach	1
199	2020-11-03 19:18:04.954	2020-11-03 19:18:04.954	203167	Joe Resendez	26	Trainer	3
201	2020-11-03 19:18:04.977	2020-11-03 19:18:04.978	1629711	Roy Rana	26	Assistant Coach	2
88	2020-11-03 19:17:36.707	2020-11-03 19:17:36.707	201675	Carl Eaton	12	Assistant Trainer	4
106	2020-11-03 19:17:40.96	2020-11-03 19:17:40.96	2345	Frank Vogel	14	Head Coach	1
112	2020-11-03 19:17:42.757	2020-11-03 19:17:42.758	1629885	Niele Ivey	15	Assistant Coach	2
121	2020-11-03 19:17:44.157	2020-11-03 19:17:44.158	1281	Jay Sabol	16	Trainer	3
125	2020-11-03 19:17:44.179	2020-11-03 19:17:44.179	204226	Chris Quinn	16	Assistant Coach for Player Development	12
143	2020-11-03 19:17:52.049	2020-11-03 19:17:52.049	1279	Jeff Bzdelik	19	Associate Head Coach	9
153	2020-11-03 19:17:54.239	2020-11-03 19:17:54.239	201696	Kaleb Canales	20	Assistant Coach	2
163	2020-11-03 19:17:56.08	2020-11-03 19:17:56.081	202859	David Akinyooye	21	Assistant Coach	2
165	2020-11-03 19:17:56.083	2020-11-03 19:17:56.083	2366	Mike Wilks	21	Assistant Coach	2
174	2020-11-03 19:17:59.99	2020-11-03 19:17:59.991	1941	Doc Rivers	23	Head Coach	1
178	2020-11-03 19:17:59.993	2020-11-03 19:17:59.994	2515	Dan Burke	23	Assistant Coach	2
180	2020-11-03 19:17:59.997	2020-11-03 19:17:59.998	202743	John Bryant	23	Assistant Coach	2
186	2020-11-03 19:18:01.192	2020-11-03 19:18:01.192	202111	Kevin Young	24	Assistant Coach	2
188	2020-11-03 19:18:01.194	2020-11-03 19:18:01.195	1629450	Larry Greer	24	Assistant Coach	2
89	2020-11-03 19:17:36.705	2020-11-03 19:17:36.706	201765	Nate Bjorkgren	12	Head Coach	1
107	2020-11-03 19:17:40.976	2020-11-03 19:17:40.977	2130	Mike Penberthy	14	Assistant Coach	2
110	2020-11-03 19:17:40.98	2020-11-03 19:17:40.981	203597	Phil Handy	14	Assistant Coach	2
122	2020-11-03 19:17:44.158	2020-11-03 19:17:44.159	201682	Octavio De La Grana	16	Assistant Coach for Player Development	12
124	2020-11-03 19:17:44.177	2020-11-03 19:17:44.178	204229	Malik Allen	16	Assistant Coach	2
135	2020-11-03 19:17:49.948	2020-11-03 19:17:49.949	1628772	Kevin Burleson	18	Assistant Coach	2
169	2020-11-03 19:17:57.557	2020-11-03 19:17:57.557	204013	Pat Delany	22	Assistant Coach	2
182	2020-11-03 19:18:01.189	2020-11-03 19:18:01.19	101273	Monty Williams	24	Head Coach	1
192	2020-11-03 19:18:03.5	2020-11-03 19:18:03.501	2457	Jannero Pargo	25	Assistant Coach	2
200	2020-11-03 19:18:04.976	2020-11-03 19:18:04.976	1243	Alvin Gentry	26	Associate Head Coach	9
90	2020-11-03 19:17:36.706	2020-11-03 19:17:36.706	200874	Bill Bayno	12	Assistant Coach	2
92	2020-11-03 19:17:36.73	2020-11-03 19:17:36.731	101200	Josh Corbeil	12	Trainer	3
114	2020-11-03 19:17:42.758	2020-11-03 19:17:42.759	1628234	David McClure	15	Assistant Coach	2
117	2020-11-03 19:17:42.783	2020-11-03 19:17:42.783	1630018	Eric Oetter	15	Trainer	3
170	2020-11-03 19:17:57.558	2020-11-03 19:17:57.558	2720	Ernest Eugene	22	Trainer	3
172	2020-11-03 19:17:57.577	2020-11-03 19:17:57.578	2821	Ty Corbin	22	Assistant Coach	2
176	2020-11-03 19:17:59.991	2020-11-03 19:17:59.992	202108	Sam Cassell	23	Assistant Coach	2
91	2020-11-03 19:17:36.727	2020-11-03 19:17:36.728	202434	Popeye Jones	12	Assistant Coach	2
103	2020-11-03 19:17:40.961	2020-11-03 19:17:40.962	1629748	Quinton Crawford	14	Assistant Coach	2
108	2020-11-03 19:17:40.977	2020-11-03 19:17:40.978	203456	Jason Kidd	14	Assistant Coach	2
120	2020-11-03 19:17:44.157	2020-11-03 19:17:44.157	203599	Dan Craig	16	Assistant Coach	2
138	2020-11-03 19:17:49.951	2020-11-03 19:17:49.951	203150	David Vanterpool	18	Associate Head Coach	9
98	2020-11-03 19:17:38.856	2020-11-03 19:17:38.857	1497	Chauncey Billups	13	Lead Assistant Coach	13
113	2020-11-03 19:17:42.758	2020-11-03 19:17:42.759	2086	Scoonie Penn	15	Assistant Coach	2
116	2020-11-03 19:17:42.782	2020-11-03 19:17:42.782	204011	Darko Rajakovic	15	Assistant Coach	2
129	2020-11-03 19:17:47.705	2020-11-03 19:17:47.706	2649	Chad Forcier	17	Assistant Coach	2
131	2020-11-03 19:17:47.708	2020-11-03 19:17:47.708	204225	Charles Lee	17	Assistant Coach	2
136	2020-11-03 19:17:49.949	2020-11-03 19:17:49.949	201687	Ed Pinckney	18	Assistant Coach	2
139	2020-11-03 19:17:49.952	2020-11-03 19:17:49.952	1291	Jerry Sichting	18	Assistant Coach	2
141	2020-11-03 19:17:49.955	2020-11-03 19:17:49.955	2146	Gregg Farnam	18	Trainer	3
204	2020-11-03 19:18:06.654	2020-11-03 19:18:06.654	204019	Becky Hammon	27	Assistant Coach	2
206	2020-11-03 19:18:06.661	2020-11-03 19:18:06.661	1264	Will Sevening	27	Trainer	3
210	2020-11-03 19:18:08.082	2020-11-03 19:18:08.083	201878	Adrian Griffin	28	Assistant Coach	2
216	2020-11-03 19:18:09.829	2020-11-03 19:18:09.83	202439	Quin Snyder	29	Head Coach	1
220	2020-11-03 19:18:09.831	2020-11-03 19:18:09.832	1628785	Zach Guthrie	29	Assistant Coach	2
222	2020-11-03 19:18:09.834	2020-11-03 19:18:09.834	1626233	Jeff Watkinson	29	Assistant Coach	2
225	2020-11-03 19:18:11.232	2020-11-03 19:18:11.232	1627328	Jarell Christian	30	Assistant Coach	2
102	2020-11-03 19:17:38.861	2020-11-03 19:17:38.862	2010	Jasen Powell	13	Trainer	3
123	2020-11-03 19:17:44.176	2020-11-03 19:17:44.177	203598	Juwan Howard	16	Assistant Coach	2
137	2020-11-03 19:17:49.949	2020-11-03 19:17:49.95	202109	Bryan Gates	18	Assistant Coach	2
140	2020-11-03 19:17:49.953	2020-11-03 19:17:49.954	203143	Pablo Prigioni	18	Assistant Coach	2
183	2020-11-03 19:18:01.189	2020-11-03 19:18:01.19	2581	Steve Blake	24	Assistant Coach	2
190	2020-11-03 19:18:03.499	2020-11-03 19:18:03.5	1628240	John McCullough	25	Assistant Coach	2
209	2020-11-03 19:18:08.082	2020-11-03 19:18:08.082	203606	Nick Nurse	28	Head Coach	1
213	2020-11-03 19:18:08.084	2020-11-03 19:18:08.085	1629761	Fab Flournoy	28	Assistant Coach	2
215	2020-11-03 19:18:08.087	2020-11-03 19:18:08.087	1629822	Brittni Donaldson	28	Assistant Coach	2
226	2020-11-03 19:18:11.232	2020-11-03 19:18:11.233	202105	Robert Pack	30	Assistant Coach	2
105	2020-11-03 19:17:40.96	2020-11-03 19:17:40.961	1353	Lionel Hollins	14	Assistant Coach	2
109	2020-11-03 19:17:40.978	2020-11-03 19:17:40.979	201766	Nina Hsieh	14	Trainer	3
119	2020-11-03 19:17:44.156	2020-11-03 19:17:44.157	1787	Erik Spoelstra	16	Head Coach	1
134	2020-11-03 19:17:49.948	2020-11-03 19:17:49.948	202443	Ryan Saunders	18	Head Coach	1
150	2020-11-03 19:17:54.237	2020-11-03 19:17:54.238	1301	Tom Thibodeau	20	Head Coach	1
168	2020-11-03 19:17:57.556	2020-11-03 19:17:57.556	204004	Steve Hetzel	22	Assistant Coach	2
175	2020-11-03 19:17:59.99	2020-11-03 19:17:59.991	1639	Jim O'Brien	23	Assistant Coach	2
193	2020-11-03 19:18:03.501	2020-11-03 19:18:03.502	202891	Nate Tibbetts	25	Associate Head Coach	9
195	2020-11-03 19:18:03.504	2020-11-03 19:18:03.504	1627471	Jim Moran	25	Assistant Coach	2
144	2020-11-03 19:17:52.049	2020-11-03 19:17:52.05	204235	Kevin Hanson	19	Assistant Coach	2
154	2020-11-03 19:17:54.239	2020-11-03 19:17:54.24	2815	Pat Sullivan	20	Assistant Coach	2
157	2020-11-03 19:17:54.243	2020-11-03 19:17:54.243	204008	Johnnie Bryant	20	Associate Head Coach	9
159	2020-11-03 19:17:54.248	2020-11-03 19:17:54.248	2519	Andy Greer	20	Assistant Coach	2
161	2020-11-03 19:17:56.079	2020-11-03 19:17:56.08	1627327	Mark Daigneault	21	Assistant Coach	2
167	2020-11-03 19:17:57.555	2020-11-03 19:17:57.556	2168	Steve Clifford	22	Head Coach	1
185	2020-11-03 19:18:01.19	2020-11-03 19:18:01.191	1629410	David Crewe	24	Trainer	3
187	2020-11-03 19:18:01.193	2020-11-03 19:18:01.194	1628228	Willie Green	24	Assistant Coach	2
198	2020-11-03 19:18:04.953	2020-11-03 19:18:04.954	203605	Jesse Mermuys	26	Assistant Coach	2
202	2020-11-03 19:18:04.979	2020-11-03 19:18:04.979	202985	Bobby Jackson	26	Assistant Coach for Player Development	12
207	2020-11-03 19:18:06.658	2020-11-03 19:18:06.658	2887	Chip Engelland	27	Assistant Coach	2
217	2020-11-03 19:18:09.829	2020-11-03 19:18:09.83	2820	Mark McKown	29	Assistant Coach	2
224	2020-11-03 19:18:11.231	2020-11-03 19:18:11.232	2623	Scott Brooks	30	Head Coach	1
228	2020-11-03 19:18:11.235	2020-11-03 19:18:11.236	1655	Tony Brown	30	Associate Head Coach	9
230	2020-11-03 19:18:11.238	2020-11-03 19:18:11.238	200744	Corey Gaines	30	Assistant Coach	2
83	2020-11-03 19:17:34.962	2020-11-03 19:17:34.962	202431	Jason Biles	11	Trainer	3
86	2020-11-03 19:17:34.979	2020-11-03 19:17:34.979	1257	Keith Jones	11	Trainer	3
95	2020-11-03 19:17:38.854	2020-11-03 19:17:38.854	1271	Larry Drew	13	Assistant Coach	2
99	2020-11-03 19:17:38.86	2020-11-03 19:17:38.86	2663	Armond Hill	13	Assistant Coach	2
115	2020-11-03 19:17:42.78	2020-11-03 19:17:42.781	203797	Brad Jones	15	Assistant Coach	2
118	2020-11-03 19:17:42.784	2020-11-03 19:17:42.784	202433	Vitaly Potapenko	15	Assistant Coach	2
128	2020-11-03 19:17:47.705	2020-11-03 19:17:47.705	204224	Ben Sullivan	17	Assistant Coach	2
133	2020-11-03 19:17:47.709	2020-11-03 19:17:47.71	452	Vin Baker	17	Assistant Coach	2
142	2020-11-03 19:17:52.048	2020-11-03 19:17:52.049	1277	Stan Van Gundy	19	Head Coach	1
146	2020-11-03 19:17:52.051	2020-11-03 19:17:52.052	202896	Chris Finch	19	Associate Head Coach	9
148	2020-11-03 19:17:52.054	2020-11-03 19:17:52.055	201676	Fred Vinson	19	Assistant Coach	2
151	2020-11-03 19:17:54.238	2020-11-03 19:17:54.238	1630161	Kenny Payne	20	Lead Assistant Coach	13
155	2020-11-03 19:17:54.24	2020-11-03 19:17:54.241	101269	Anthony Goenaga	20	Assistant Trainer	4
158	2020-11-03 19:17:54.246	2020-11-03 19:17:54.247	1285	Mike Woodson	20	Assistant Coach	2
164	2020-11-03 19:17:56.082	2020-11-03 19:17:56.082	1628178	Vin Bhavnani	21	Assistant Coach	2
166	2020-11-03 19:17:56.084	2020-11-03 19:17:56.085	1629423	Donnie Strack	21	Trainer	3
171	2020-11-03 19:17:57.576	2020-11-03 19:17:57.576	1627341	Mike Batiste	22	Assistant Coach	2
173	2020-11-03 19:17:57.578	2020-11-03 19:17:57.579	1627164	Bruce Kreutzer	22	Assistant Coach	2
184	2020-11-03 19:18:01.19	2020-11-03 19:18:01.191	101173	Mark Bryant	24	Assistant Coach	2
197	2020-11-03 19:18:04.953	2020-11-03 19:18:04.953	204012	Luke Walton	26	Head Coach	1
205	2020-11-03 19:18:06.655	2020-11-03 19:18:06.655	1495	Tim Duncan	27	Assistant Coach	2
208	2020-11-03 19:18:06.659	2020-11-03 19:18:06.66	1628181	Will Hardy	27	Assistant Coach	2
211	2020-11-03 19:18:08.083	2020-11-03 19:18:08.083	1629821	Jon Goodwillie	28	Assistant Coach	2
214	2020-11-03 19:18:08.085	2020-11-03 19:18:08.086	1629144	Sergio Scariolo	28	Assistant Coach	2
218	2020-11-03 19:18:09.83	2020-11-03 19:18:09.83	1997	Mike Wells	29	Assistant Coach	2
221	2020-11-03 19:18:09.833	2020-11-03 19:18:09.833	204007	Alex Jensen	29	Assistant Coach	2
223	2020-11-03 19:18:09.835	2020-11-03 19:18:09.835	101277	Brian Zettler	29	Trainer	3
\.


--
-- Data for Name: ColorScheme; Type: TABLE DATA; Schema: public; Owner: tundera
--

COPY public."ColorScheme" (id, "createdAt", "updatedAt", "primary", secondary, "teamId") FROM stdin;
29	2021-01-26 04:05:11.968	2021-01-26 04:05:08.826	#002D62	#FDBB30	12
30	2021-01-26 04:05:12.421	2021-01-26 04:05:08.819	#0C2340	#236192	18
32	2021-01-26 04:32:32.495	2021-01-26 04:32:32.492	#CE1141	#000000	5
33	2021-01-26 04:38:17.75	2021-01-26 04:38:17.747	#CE1141	#000000	28
1	2021-01-26 04:05:08.844	2021-01-26 04:05:08.819	# 002B5C	#E31837	30
2	2021-01-26 04:05:09.289	2021-01-26 04:05:08.82	#C4CED4	#000000	27
3	2021-01-26 04:05:09.731	2021-01-26 04:05:08.82	#5A2D81	#63727A	26
4	2021-01-26 04:05:09.731	2021-01-26 04:05:08.82	#002B5C	#F9A01B	29
5	2021-01-26 04:05:10.175	2021-01-26 04:05:08.821	#98002E	#000000	16
6	2021-01-26 04:05:10.175	2021-01-26 04:05:08.821	#E03A3E	#000000	25
7	2021-01-26 04:05:10.175	2021-01-26 04:05:08.821	#1D1160	#E56020	24
8	2021-01-26 04:05:10.631	2021-01-26 04:05:08.822	#5D76A9	#12173F	15
10	2021-01-26 04:05:10.631	2021-01-26 04:05:08.823	#00471B	#EEE1C6	17
9	2021-01-26 04:05:10.631	2021-01-26 04:05:08.822	#007AC1	#EF3B24	21
11	2021-01-26 04:05:10.631	2021-01-26 04:05:08.822	#006BB6	#D50032	23
15	2021-01-26 04:05:11.081	2021-01-26 04:05:08.823	#006BB6	#F58426	20
13	2021-01-26 04:05:11.081	2021-01-26 04:05:08.823	#0C2340	#C8102E	19
12	2021-01-26 04:05:11.081	2021-01-26 04:05:08.824	#C8102E	#1D428A	13
14	2021-01-26 04:05:11.081	2021-01-26 04:05:08.824	#552583	#FDB927	14
16	2021-01-26 04:05:11.081	2021-01-26 04:05:08.823	#0077C0	#C4CED4	22
18	2021-01-26 04:05:11.521	2021-01-26 04:05:08.825	#1D428A	#FFC72C	10
19	2021-01-26 04:05:11.521	2021-01-26 04:05:08.825	#0E2240	#FEC524	8
21	2021-01-26 04:05:11.521	2021-01-26 04:05:08.826	#C8102E	#1D42BA	9
17	2021-01-26 04:05:11.521	2021-01-26 04:05:08.825	#CE1141	#000000	11
22	2021-01-26 04:05:11.521	2021-01-26 04:05:08.824	#00538C	#B8C4CA	7
28	2021-01-26 04:05:11.968	2021-01-26 04:05:08.827	#000000	#FFFFFF	3
26	2021-01-26 04:05:11.968	2021-01-26 04:05:08.828	#E03A3E	#C1D32F	1
24	2021-01-26 04:05:11.968	2021-01-26 04:05:08.827	#007A33	#BA9653	2
23	2021-01-26 04:05:11.968	2021-01-26 04:05:08.827	#860038	#041E42	6
25	2021-01-26 04:05:11.968	2021-01-26 04:05:08.826	#1D1160	#00788C	4
\.


--
-- Data for Name: Player; Type: TABLE DATA; Schema: public; Owner: tundera
--

COPY public."Player" (id, "createdAt", "updatedAt", handle, name, slug, "teamId", height, weight, number, "position") FROM stdin;
1	2020-11-03 19:17:13.625	2020-11-03 19:17:13.626	1629164	Brandon Goodwin	brandon-goodwin	1	6-0	180	0	G
2	2020-11-03 19:17:13.638	2020-11-03 19:17:13.639	201952	Jeff Teague	jeff-teague	1	6-3	195	00	G
3	2020-11-03 19:17:13.645	2020-11-03 19:17:13.645	1626203	Treveon Graham	treveon-graham	1	6-5	219	2	G-F
4	2020-11-03 19:17:13.651	2020-11-03 19:17:13.651	1629718	Charles Brown Jr.	charles-brown-jr	1	6-6	199	4	G
5	2020-11-03 19:17:13.651	2020-11-03 19:17:13.651	1628989	Kevin Huerter	kevin-huerter	1	6-7	190	3	G-F
6	2020-11-03 19:17:13.673	2020-11-03 19:17:13.674	1629631	De'Andre Hunter	deandre-hunter	1	6-7	225	12	F-G
7	2020-11-03 19:17:13.673	2020-11-03 19:17:13.674	1629027	Trae Young	trae-young	1	6-1	180	11	G
8	2020-11-03 19:17:13.673	2020-11-03 19:17:13.674	203473	Dewayne Dedmon	dewayne-dedmon	1	7-0	245	14	C
9	2020-11-03 19:17:13.673	2020-11-03 19:17:13.674	1627746	Skal Labissiere	skal-labissiere	1	6-10	235	7	F-C
10	2020-11-03 19:17:13.679	2020-11-03 19:17:13.68	1629629	Cam Reddish	cam-reddish	1	6-8	218	22	F-G
11	2020-11-03 19:17:13.679	2020-11-03 19:17:13.68	1628381	John Collins	john-collins	1	6-9	235	20	F
12	2020-11-03 19:17:13.679	2020-11-03 19:17:13.68	1713	Vince Carter	vince-carter	1	6-6	220	15	G-F
13	2020-11-03 19:17:13.679	2020-11-03 19:17:13.68	1628981	Bruno Fernando	bruno-fernando	1	6-9	240	24	F-C
14	2020-11-03 19:17:13.679	2020-11-03 19:17:13.68	203991	Clint Capela	clint-capela	1	6-10	240	15	C
15	2020-11-03 19:17:13.685	2020-11-03 19:17:13.685	1627761	DeAndre' Bembry	deandre-bembry	1	6-5	210	95	G-F
16	2020-11-03 19:17:13.685	2020-11-03 19:17:13.685	1627745	Damian Jones	damian-jones	1	6-11	245	30	C
18	2020-11-03 19:17:15.515	2020-11-03 19:17:15.516	1627759	Jaylen Brown	jaylen-brown	2	6-6	223	7	G-F
17	2020-11-03 19:17:15.517	2020-11-03 19:17:15.518	1629684	Grant Williams	grant-williams	2	6-6	236	12	F
19	2020-11-03 19:17:15.516	2020-11-03 19:17:15.517	202954	Brad Wanamaker	brad-wanamaker	2	6-3	210	9	G
21	2020-11-03 19:17:15.518	2020-11-03 19:17:15.518	1628464	Daniel Theis	daniel-theis	2	6-8	245	27	F-C
20	2020-11-03 19:17:15.515	2020-11-03 19:17:15.515	1628369	Jayson Tatum	jayson-tatum	2	6-8	210	0	F-G
22	2020-11-03 19:17:15.518	2020-11-03 19:17:15.519	1628400	Semi Ojeleye	semi-ojeleye	2	6-6	240	37	F
23	2020-11-03 19:17:15.529	2020-11-03 19:17:15.529	1629057	Robert Williams III	robert-williams-iii	2	6-8	237	44	C-F
24	2020-11-03 19:17:15.534	2020-11-03 19:17:15.535	202689	Kemba Walker	kemba-walker	2	6-0	184	8	G
25	2020-11-03 19:17:15.539	2020-11-03 19:17:15.539	202683	Enes Kanter	enes-kanter	2	6-10	250	11	C
26	2020-11-03 19:17:15.544	2020-11-03 19:17:15.545	202330	Gordon Hayward	gordon-hayward	2	6-7	225	20	F
27	2020-11-03 19:17:15.544	2020-11-03 19:17:15.545	1629641	Romeo Langford	romeo-langford	2	6-4	216	45	G-F
28	2020-11-03 19:17:15.55	2020-11-03 19:17:15.55	1629750	Javonte Green	javonte-green	2	6-4	205	43	G-F
29	2020-11-03 19:17:15.55	2020-11-03 19:17:15.55	1629682	Tremont Waters	tremont-waters	2	5-10	175	51	G
30	2020-11-03 19:17:15.55	2020-11-03 19:17:15.55	1629605	Tacko Fall	tacko-fall	2	7-5	311	99	C
31	2020-11-03 19:17:15.55	2020-11-03 19:17:15.55	203935	Marcus Smart	marcus-smart	2	6-3	220	36	G
32	2020-11-03 19:17:15.55	2020-11-03 19:17:15.55	1629035	Carsen Edwards	carsen-edwards	2	5-11	200	4	G
33	2020-11-03 19:17:15.554	2020-11-03 19:17:15.555	1629738	Vincent Poirier	vincent-poirier	2	7-0	235	77	C-F
34	2020-11-03 19:17:17.886	2020-11-03 19:17:17.887	1629066	Rodions Kurucs	rodions-kurucs	3	6-9	228	00	F
35	2020-11-03 19:17:17.887	2020-11-03 19:17:17.887	2037	Jamal Crawford	jamal-crawford	3	6-5	200	1	G
36	2020-11-03 19:17:17.887	2020-11-03 19:17:17.888	1629185	Chris Chiozza	chris-chiozza	3	5-11	175	4	G
37	2020-11-03 19:17:17.888	2020-11-03 19:17:17.888	201142	Kevin Durant	kevin-durant	3	6-10	240	7	F
38	2020-11-03 19:17:17.888	2020-11-03 19:17:17.889	1627789	Timothe Luwawu-Cabarrot	timothe-luwawu-cabarrot	3	6-7	220	9	G-F
39	2020-11-03 19:17:17.889	2020-11-03 19:17:17.89	202681	Kyrie Irving	kyrie-irving	3	6-2	195	11	G
40	2020-11-03 19:17:17.89	2020-11-03 19:17:17.89	1629058	Dzanan Musa	dzanan-musa	3	6-9	217	13	G-F
41	2020-11-03 19:17:17.89	2020-11-03 19:17:17.891	201163	Wilson Chandler	wilson-chandler	3	6-8	235	21	F
42	2020-11-03 19:17:17.891	2020-11-03 19:17:17.892	203915	Spencer Dinwiddie	spencer-dinwiddie	3	6-5	215	26	G
43	2020-11-03 19:17:17.899	2020-11-03 19:17:17.899	1629725	Jeremiah Martin	jeremiah-martin	3	6-2	185	0	G
44	2020-11-03 19:17:17.9	2020-11-03 19:17:17.901	1627752	Taurean Prince	taurean-prince	3	6-7	218	2	F
45	2020-11-03 19:17:17.902	2020-11-03 19:17:17.902	201599	DeAndre Jordan	deandre-jordan	3	6-11	265	6	C
46	2020-11-03 19:17:17.903	2020-11-03 19:17:17.904	204020	Tyler Johnson	tyler-johnson	3	6-3	186	8	G
47	2020-11-03 19:17:17.905	2020-11-03 19:17:17.905	1626147	Justin Anderson	justin-anderson	3	6-5	231	10	F-G
48	2020-11-03 19:17:17.917	2020-11-03 19:17:17.918	1629651	Nicolas Claxton	nicolas-claxton	3	6-11	215	33	F-C
49	2020-11-03 19:17:17.908	2020-11-03 19:17:17.909	202066	Garrett Temple	garrett-temple	3	6-5	195	17	G-F
50	2020-11-03 19:17:17.907	2020-11-03 19:17:17.907	203925	Joe Harris	joe-harris	3	6-6	220	12	G-F
51	2020-11-03 19:17:17.91	2020-11-03 19:17:17.91	1627747	Caris LeVert	caris-levert	3	6-6	205	22	G
52	2020-11-03 19:17:17.917	2020-11-03 19:17:17.918	202498	Lance Thomas	lance-thomas	3	6-8	225	42	F
53	2020-11-03 19:17:17.918	2020-11-03 19:17:17.918	1629743	Donta Hall	donta-hall	3	6-9	229	45	F
54	2020-11-03 19:17:17.911	2020-11-03 19:17:17.912	1628386	Jarrett Allen	jarrett-allen	3	6-11	243	31	C
55	2020-11-03 19:17:19.775	2020-11-03 19:17:19.776	1628970	Miles Bridges	miles-bridges	4	6-6	225	0	F
56	2020-11-03 19:17:19.775	2020-11-03 19:17:19.776	1626179	Terry Rozier	terry-rozier	4	6-1	190	3	G
57	2020-11-03 19:17:19.776	2020-11-03 19:17:19.777	201587	Nicolas Batum	nicolas-batum	4	6-9	230	5	G-F
58	2020-11-03 19:17:19.777	2020-11-03 19:17:19.777	1628407	Dwayne Bacon	dwayne-bacon	4	6-6	221	7	G-F
59	2020-11-03 19:17:19.777	2020-11-03 19:17:19.778	1626195	Willy Hernangomez	willy-hernangomez	4	6-11	250	9	C-F
60	2020-11-03 19:17:19.778	2020-11-03 19:17:19.778	1628998	Cody Martin	cody-martin	4	6-5	205	11	F
61	2020-11-03 19:17:19.778	2020-11-03 19:17:19.779	1629023	P.J. Washington	pj-washington	4	6-7	230	25	F
62	2020-11-03 19:17:19.779	2020-11-03 19:17:19.78	203469	Cody Zeller	cody-zeller	4	7-0	240	40	F-C
63	2020-11-03 19:17:19.781	2020-11-03 19:17:19.781	1628370	Malik Monk	malik-monk	4	6-3	200	1	G
64	2020-11-03 19:17:19.782	2020-11-03 19:17:19.783	1628984	Devonte' Graham	devonte-graham	4	6-1	195	4	G
65	2020-11-03 19:17:19.784	2020-11-03 19:17:19.784	1629667	Jalen McDaniels	jalen-mcdaniels	4	6-10	205	6	F-C
66	2020-11-03 19:17:19.785	2020-11-03 19:17:19.786	202687	Bismack Biyombo	bismack-biyombo	4	6-8	255	8	C
67	2020-11-03 19:17:19.787	2020-11-03 19:17:19.787	1628997	Caleb Martin	caleb-martin	4	6-5	205	10	F
68	2020-11-03 19:17:19.795	2020-11-03 19:17:19.796	1628424	Kobi Simmons	kobi-simmons	4	6-5	180	23	G
69	2020-11-03 19:17:19.797	2020-11-03 19:17:19.797	1629034	Ray Spalding	ray-spalding	4	6-9	225	26	F
70	2020-11-03 19:17:23.002	2020-11-03 19:17:23.003	1629632	Coby White	coby-white	5	6-4	195	0	G
71	2020-11-03 19:17:23.003	2020-11-03 19:17:23.003	1627885	Shaquille Harrison	shaquille-harrison	5	6-7	190	3	G
72	2020-11-03 19:17:23.004	2020-11-03 19:17:23.005	203897	Zach LaVine	zach-lavine	5	6-6	200	8	G-F
73	2020-11-03 19:17:23.005	2020-11-03 19:17:23.005	1628990	Chandler Hutchison	chandler-hutchison	5	6-7	210	15	F-G
74	2020-11-03 19:17:23.006	2020-11-03 19:17:23.006	201152	Thaddeus Young	thaddeus-young	5	6-8	235	21	F
83	2020-11-03 19:17:23.027	2020-11-03 19:17:23.028	203490	Otto Porter Jr.	otto-porter-jr	5	6-8	198	22	F
85	2020-11-03 19:17:23.033	2020-11-03 19:17:23.034	1629622	Max Strus	max-strus	5	6-5	215	28	G-F
89	2020-11-03 19:17:25.452	2020-11-03 19:17:25.453	1629645	Kevin Porter Jr.	kevin-porter-jr	6	6-4	203	4	G-F
93	2020-11-03 19:17:25.456	2020-11-03 19:17:25.457	1628035	Alfonzo McKinnie	alfonzo-mckinnie	6	6-7	215	28	F
109	2020-11-03 19:17:27.062	2020-11-03 19:17:27.063	204001	Kristaps Porzingis	kristaps-porzingis	7	7-3	240	6	F-C
126	2020-11-03 19:17:28.916	2020-11-03 19:17:28.916	1628420	Monte Morris	monte-morris	8	6-2	183	11	G
140	2020-11-03 19:17:30.789	2020-11-03 19:17:30.789	1628383	Justin Patton	justin-patton	9	6-11	241	12	C
148	2020-11-03 19:17:30.798	2020-11-03 19:17:30.799	204038	Langston Galloway	langston-galloway	9	6-1	200	9	G
150	2020-11-03 19:17:30.806	2020-11-03 19:17:30.807	203503	Tony Snell	tony-snell	9	6-6	213	17	G
163	2020-11-03 19:17:32.949	2020-11-03 19:17:32.95	1629346	Alen Smailagic	alen-smailagic	10	6-10	215	6	F
165	2020-11-03 19:17:32.955	2020-11-03 19:17:32.956	1628539	Mychal Mulder	mychal-mulder	10	6-3	184	12	G
166	2020-11-03 19:17:32.959	2020-11-03 19:17:32.959	203110	Draymond Green	draymond-green	10	6-6	230	23	F
169	2020-11-03 19:17:34.928	2020-11-03 19:17:34.928	1629598	Chris Clemons	chris-clemons	11	5-9	180	3	G
173	2020-11-03 19:17:34.93	2020-11-03 19:17:34.931	200782	P.J. Tucker	pj-tucker	11	6-5	245	17	F
184	2020-11-03 19:17:34.951	2020-11-03 19:17:34.952	203496	Robert Covington	robert-covington	11	6-7	209	33	F
186	2020-11-03 19:17:36.659	2020-11-03 19:17:36.66	204456	T.J. McConnell	tj-mcconnell	12	6-1	190	9	G
205	2020-11-03 19:17:38.807	2020-11-03 19:17:38.808	203210	JaMychal Green	jamychal-green	13	6-8	227	4	F-C
226	2020-11-03 19:17:40.924	2020-11-03 19:17:40.925	2747	JR Smith	jr-smith	14	6-6	220	21	G
240	2020-11-03 19:17:42.712	2020-11-03 19:17:42.713	1626159	Justise Winslow	justise-winslow	15	6-6	222	7	F-G
262	2020-11-03 19:17:44.126	2020-11-03 19:17:44.127	203524	Solomon Hill	solomon-hill	16	6-6	226	44	F
265	2020-11-03 19:17:44.129	2020-11-03 19:17:44.13	1629639	Tyler Herro	tyler-herro	16	6-5	195	14	G
267	2020-11-03 19:17:44.132	2020-11-03 19:17:44.133	203482	Kelly Olynyk	kelly-olynyk	16	6-11	240	9	F-C
269	2020-11-03 19:17:44.135	2020-11-03 19:17:44.136	2738	Andre Iguodala	andre-iguodala	16	6-6	215	28	G-F
271	2020-11-03 19:17:44.144	2020-11-03 19:17:44.144	1629130	Duncan Robinson	duncan-robinson	16	6-7	215	55	F
275	2020-11-03 19:17:47.675	2020-11-03 19:17:47.675	1626192	Pat Connaughton	pat-connaughton	17	6-5	209	24	G
300	2020-11-03 19:17:49.926	2020-11-03 19:17:49.927	1629675	Naz Reid	naz-reid	18	6-9	264	11	C-F
305	2020-11-03 19:17:52.014	2020-11-03 19:17:52.015	1628366	Lonzo Ball	lonzo-ball	19	6-6	190	2	G
78	2020-11-03 19:17:23.012	2020-11-03 19:17:23.013	1626245	Cristiano Felicio	cristiano-felicio	5	6-10	270	6	F-C
84	2020-11-03 19:17:23.032	2020-11-03 19:17:23.032	1627756	Denzel Valentine	denzel-valentine	5	6-4	220	45	G
86	2020-11-03 19:17:23.037	2020-11-03 19:17:23.038	1627739	Kris Dunn	kris-dunn	5	6-3	205	32	G
90	2020-11-03 19:17:25.453	2020-11-03 19:17:25.454	1629685	Dylan Windler	dylan-windler	6	6-6	196	9	G-F
96	2020-11-03 19:17:25.457	2020-11-03 19:17:25.458	1629731	Dean Wade	dean-wade	6	6-9	228	32	F-C
107	2020-11-03 19:17:27.056	2020-11-03 19:17:27.056	1628973	Jalen Brunson	jalen-brunson	7	6-1	190	13	G
130	2020-11-03 19:17:28.927	2020-11-03 19:17:28.927	203486	Mason Plumlee	mason-plumlee	8	6-11	254	7	F-C
133	2020-11-03 19:17:28.931	2020-11-03 19:17:28.931	1629076	Tyler Cook	tyler-cook	8	6-8	255	25	F
135	2020-11-03 19:17:28.933	2020-11-03 19:17:28.934	203914	Gary Harris	gary-harris	8	6-4	210	14	G
137	2020-11-03 19:17:28.937	2020-11-03 19:17:28.937	203943	Noah Vonleh	noah-vonleh	8	6-10	257	32	F
143	2020-11-03 19:17:30.792	2020-11-03 19:17:30.793	1626174	Christian Wood	christian-wood	9	6-10	214	35	F
154	2020-11-03 19:17:30.811	2020-11-03 19:17:30.812	201933	Blake Griffin	blake-griffin	9	6-9	250	23	F
157	2020-11-03 19:17:32.943	2020-11-03 19:17:32.944	1629672	Eric Paschall	eric-paschall	10	6-6	255	7	F
161	2020-11-03 19:17:32.946	2020-11-03 19:17:32.947	1629308	Juan Toscano-Anderson	juan-toscano-anderson	10	6-6	209	95	F
172	2020-11-03 19:17:34.93	2020-11-03 19:17:34.93	201935	James Harden	james-harden	11	6-5	220	13	G
185	2020-11-03 19:17:34.951	2020-11-03 19:17:34.952	1629739	William Howard	william-howard	11	6-8	207	52	F-G
190	2020-11-03 19:17:36.659	2020-11-03 19:17:36.659	1627763	Malcolm Brogdon	malcolm-brogdon	12	6-5	229	7	G
211	2020-11-03 19:17:38.809	2020-11-03 19:17:38.81	201976	Patrick Beverley	patrick-beverley	13	6-1	180	21	G
213	2020-11-03 19:17:38.83	2020-11-03 19:17:38.831	1629013	Landry Shamet	landry-shamet	13	6-4	190	20	G
215	2020-11-03 19:17:38.833	2020-11-03 19:17:38.834	1626149	Montrezl Harrell	montrezl-harrell	13	6-7	240	5	F-C
217	2020-11-03 19:17:38.836	2020-11-03 19:17:38.836	202694	Marcus Morris Sr.	marcus-morris-sr	13	6-8	218	31	F
219	2020-11-03 19:17:38.839	2020-11-03 19:17:38.84	101150	Lou Williams	lou-williams	13	6-1	175	23	G
221	2020-11-03 19:17:40.923	2020-11-03 19:17:40.923	202340	Avery Bradley	avery-bradley	14	6-3	180	11	G
229	2020-11-03 19:17:40.927	2020-11-03 19:17:40.928	201162	Jared Dudley	jared-dudley	14	6-6	237	10	F
232	2020-11-03 19:17:40.931	2020-11-03 19:17:40.931	203484	Kentavious Caldwell-Pope	kentavious-caldwell-pope	14	6-5	204	1	G
234	2020-11-03 19:17:40.933	2020-11-03 19:17:40.934	1629719	Devontae Cacok	devontae-cacok	14	6-8	240	12	F
236	2020-11-03 19:17:40.944	2020-11-03 19:17:40.945	1628961	Kostas Antetokounmpo	kostas-antetokounmpo	14	6-10	200	37	F
242	2020-11-03 19:17:42.713	2020-11-03 19:17:42.714	1629634	Brandon Clarke	brandon-clarke	15	6-8	215	15	F-G
281	2020-11-03 19:17:47.678	2020-11-03 19:17:47.679	201588	George Hill	george-hill	17	6-3	188	3	G
283	2020-11-03 19:17:47.683	2020-11-03 19:17:47.684	201577	Robin Lopez	robin-lopez	17	7-0	281	42	C
285	2020-11-03 19:17:47.686	2020-11-03 19:17:47.687	202083	Wesley Matthews	wesley-matthews	17	6-4	220	9	G
287	2020-11-03 19:17:47.689	2020-11-03 19:17:47.69	202339	Eric Bledsoe	eric-bledsoe	17	6-1	214	6	G
293	2020-11-03 19:17:49.906	2020-11-03 19:17:49.907	1628980	Jacob Evans	jacob-evans	18	6-4	210	12	G-F
312	2020-11-03 19:17:52.024	2020-11-03 19:17:52.025	202324	Derrick Favors	derrick-favors	19	6-9	265	22	F
323	2020-11-03 19:17:54.193	2020-11-03 19:17:54.194	1626171	Bobby Portis	bobby-portis	20	6-10	250	1	F
328	2020-11-03 19:17:54.199	2020-11-03 19:17:54.2	203944	Julius Randle	julius-randle	20	6-8	250	30	F-C
336	2020-11-03 19:17:54.214	2020-11-03 19:17:54.214	1628422	Damyean Dotson	damyean-dotson	20	6-5	210	21	G
340	2020-11-03 19:17:56.03	2020-11-03 19:17:56.031	1628983	Shai Gilgeous-Alexander	shai-gilgeous-alexander	21	6-5	180	2	G-F
356	2020-11-03 19:17:56.058	2020-11-03 19:17:56.058	1629126	Deonte Burton	deonte-burton	21	6-4	240	30	G-F
360	2020-11-03 19:17:57.51	2020-11-03 19:17:57.511	203487	Michael Carter-Williams	michael-carter-williams	22	6-5	190	7	G
416	2020-11-03 19:18:03.479	2020-11-03 19:18:03.479	1626209	Mario Hezonja	mario-hezonja	25	6-8	220	44	F-G
420	2020-11-03 19:18:03.483	2020-11-03 19:18:03.484	1629650	Moses Brown	moses-brown	25	7-2	245	4	C
425	2020-11-03 19:18:04.911	2020-11-03 19:18:04.912	1627812	Yogi Ferrell	yogi-ferrell	26	6-0	178	3	G
450	2020-11-03 19:18:06.627	2020-11-03 19:18:06.628	201988	Patty Mills	patty-mills	27	6-1	180	8	G
452	2020-11-03 19:18:06.631	2020-11-03 19:18:06.631	200752	Rudy Gay	rudy-gay	27	6-8	250	22	F-G
454	2020-11-03 19:18:06.634	2020-11-03 19:18:06.635	1629234	Drew Eubanks	drew-eubanks	27	6-9	245	14	F-C
456	2020-11-03 19:18:06.637	2020-11-03 19:18:06.638	203092	Tyler Zeller	tyler-zeller	27	6-11	250	40	F-C
459	2020-11-03 19:18:08.035	2020-11-03 19:18:08.036	1628384	OG Anunoby	og-anunoby	28	6-7	232	3	F
464	2020-11-03 19:18:08.038	2020-11-03 19:18:08.039	1627832	Fred VanVleet	fred-vanvleet	28	6-1	197	23	G
477	2020-11-03 19:18:09.783	2020-11-03 19:18:09.784	1629714	Jarrell Brantley	jarrell-brantley	29	6-5	250	5	F
481	2020-11-03 19:18:09.786	2020-11-03 19:18:09.787	203497	Rudy Gobert	rudy-gobert	29	7-1	258	27	C
494	2020-11-03 19:18:11.182	2020-11-03 19:18:11.183	1628972	Troy Brown Jr.	troy-brown-jr	30	6-6	215	6	G-F
498	2020-11-03 19:18:11.184	2020-11-03 19:18:11.185	1629140	Johnathan Williams	johnathan-williams	30	6-9	228	19	F
82	2020-11-03 19:17:23.025	2020-11-03 19:17:23.026	1629690	Adam Mokoka	adam-mokoka	5	6-5	190	20	G
98	2020-11-03 19:17:25.46	2020-11-03 19:17:25.461	203083	Andre Drummond	andre-drummond	6	6-10	279	3	C
103	2020-11-03 19:17:27.052	2020-11-03 19:17:27.052	201584	Courtney Lee	courtney-lee	7	6-5	215	1	G
112	2020-11-03 19:17:27.057	2020-11-03 19:17:27.058	1626161	Willie Cauley-Stein	willie-cauley-stein	7	7-0	240	33	C
127	2020-11-03 19:17:28.924	2020-11-03 19:17:28.924	1627750	Jamal Murray	jamal-murray	8	6-4	215	27	G
192	2020-11-03 19:17:36.663	2020-11-03 19:17:36.663	1629048	Goga Bitadze	goga-bitadze	12	6-11	250	88	C-F
209	2020-11-03 19:17:38.81	2020-11-03 19:17:38.811	1629662	Mfiondu Kabengele	mfiondu-kabengele	13	6-9	250	25	F-C
224	2020-11-03 19:17:40.921	2020-11-03 19:17:40.922	1629659	Talen Horton-Tucker	talen-horton-tucker	14	6-4	234	5	G
244	2020-11-03 19:17:42.714	2020-11-03 19:17:42.715	1629139	Yuta Watanabe	yuta-watanabe	15	6-8	215	18	G-F
260	2020-11-03 19:17:44.125	2020-11-03 19:17:44.126	1629134	Kendrick Nunn	kendrick-nunn	16	6-2	190	25	G
273	2020-11-03 19:17:47.674	2020-11-03 19:17:47.675	203507	Giannis Antetokounmpo	giannis-antetokounmpo	17	6-11	242	34	F
297	2020-11-03 19:17:49.913	2020-11-03 19:17:49.914	1629669	Jaylen Nowell	jaylen-nowell	18	6-4	201	4	G
307	2020-11-03 19:17:52.015	2020-11-03 19:17:52.015	200755	JJ Redick	jj-redick	19	6-3	200	4	G
365	2020-11-03 19:17:57.514	2020-11-03 19:17:57.515	1628982	Melvin Frazier Jr.	melvin-frazier-jr	22	6-5	215	35	G-F
385	2020-11-03 19:17:59.974	2020-11-03 19:17:59.975	203658	Norvel Pelle	norvel-pelle	23	6-10	231	14	F
401	2020-11-03 19:18:01.165	2020-11-03 19:18:01.165	1629028	Deandre Ayton	deandre-ayton	24	6-11	250	22	C
410	2020-11-03 19:18:03.474	2020-11-03 19:18:03.475	203994	Jusuf Nurkic	jusuf-nurkic	25	7-0	290	27	C
418	2020-11-03 19:18:03.481	2020-11-03 19:18:03.481	1629658	Jaylen Hoard	jaylen-hoard	25	6-8	216	6	F
421	2020-11-03 19:18:03.484	2020-11-03 19:18:03.485	202355	Hassan Whiteside	hassan-whiteside	25	7-0	265	21	C
423	2020-11-03 19:18:03.486	2020-11-03 19:18:03.487	1629642	Nassir Little	nassir-little	25	6-5	220	9	F-G
424	2020-11-03 19:18:04.913	2020-11-03 19:18:04.913	201147	Corey Brewer	corey-brewer	26	6-9	188	13	G-F
449	2020-11-03 19:18:06.616	2020-11-03 19:18:06.617	200746	LaMarcus Aldridge	lamarcus-aldridge	27	6-11	250	12	C-F
462	2020-11-03 19:18:08.037	2020-11-03 19:18:08.038	1626259	Malcolm Miller	malcolm-miller	28	6-7	210	13	G-F
466	2020-11-03 19:18:08.039	2020-11-03 19:18:08.04	1627783	Pascal Siakam	pascal-siakam	28	6-9	230	43	F
475	2020-11-03 19:18:09.782	2020-11-03 19:18:09.783	1628430	Nigel Williams-Goss	nigel-williams-goss	29	6-2	190	0	G
496	2020-11-03 19:18:11.183	2020-11-03 19:18:11.184	1628418	Thomas Bryant	thomas-bryant	30	6-10	248	13	C-F
500	2020-11-03 19:18:11.185	2020-11-03 19:18:11.186	1629726	Garrison Mathews	garrison-mathews	30	6-5	215	24	G
502	2020-11-03 19:18:11.189	2020-11-03 19:18:11.189	203894	Shabazz Napier	shabazz-napier	30	6-0	175	5	G
504	2020-11-03 19:18:11.191	2020-11-03 19:18:11.192	1629010	Jerome Robinson	jerome-robinson	30	6-4	190	12	G
507	2020-11-03 19:18:11.197	2020-11-03 19:18:11.198	1627780	Gary Payton II	gary-payton-ii	30	6-3	195	20	G
510	2020-11-03 19:18:11.212	2020-11-03 19:18:11.212	101133	Ian Mahinmi	ian-mahinmi	30	6-11	262	28	C
79	2020-11-03 19:17:23.014	2020-11-03 19:17:23.015	1627853	Ryan Arcidiacono	ryan-arcidiacono	5	6-3	195	51	G
97	2020-11-03 19:17:25.462	2020-11-03 19:17:25.462	1628395	Jordan Bell	jordan-bell	6	6-8	216	5	F
106	2020-11-03 19:17:27.055	2020-11-03 19:17:27.055	1627827	Dorian Finney-Smith	dorian-finney-smith	7	6-7	220	10	F
315	2020-11-03 19:17:52.027	2020-11-03 19:17:52.028	1628404	Josh Hart	josh-hart	19	6-5	215	3	G
325	2020-11-03 19:17:54.194	2020-11-03 19:17:54.195	1628372	Dennis Smith Jr.	dennis-smith-jr	20	6-2	205	5	G
329	2020-11-03 19:17:54.198	2020-11-03 19:17:54.199	1629011	Mitchell Robinson	mitchell-robinson	20	7-0	240	23	C-F
333	2020-11-03 19:17:54.204	2020-11-03 19:17:54.205	203090	Maurice Harkless	maurice-harkless	20	6-7	220	3	F-G
335	2020-11-03 19:17:54.208	2020-11-03 19:17:54.209	1628373	Frank Ntilikina	frank-ntilikina	20	6-4	200	11	G
341	2020-11-03 19:17:56.031	2020-11-03 19:17:56.031	1629652	Luguentz Dort	luguentz-dort	21	6-3	215	5	G
345	2020-11-03 19:17:56.033	2020-11-03 19:17:56.034	1628987	Kevin Hervey	kevin-hervey	21	6-9	230	15	F
355	2020-11-03 19:17:56.047	2020-11-03 19:17:56.047	1629676	Isaiah Roby	isaiah-roby	21	6-8	230	22	F
363	2020-11-03 19:17:57.511	2020-11-03 19:17:57.512	203095	Evan Fournier	evan-fournier	22	6-7	205	10	G-F
368	2020-11-03 19:17:57.531	2020-11-03 19:17:57.532	203920	Khem Birch	khem-birch	22	6-9	233	24	C
370	2020-11-03 19:17:57.535	2020-11-03 19:17:57.536	1628371	Jonathan Isaac	jonathan-isaac	22	6-11	230	1	F
372	2020-11-03 19:17:57.537	2020-11-03 19:17:57.538	203516	James Ennis III	james-ennis-iii	22	6-6	215	11	F
378	2020-11-03 19:17:59.955	2020-11-03 19:17:59.955	202692	Alec Burks	alec-burks	23	6-6	214	20	G
384	2020-11-03 19:17:59.958	2020-11-03 19:17:59.958	1629151	Ryan Broekhoff	ryan-broekhoff	23	6-6	215	45	G-F
404	2020-11-03 19:18:01.166	2020-11-03 19:18:01.167	1628969	Mikal Bridges	mikal-bridges	24	6-6	209	25	F
407	2020-11-03 19:18:03.474	2020-11-03 19:18:03.475	1628403	Caleb Swanigan	caleb-swanigan	25	6-9	260	50	F
433	2020-11-03 19:18:04.928	2020-11-03 19:18:04.929	1628368	De'Aaron Fox	deaaron-fox	26	6-3	185	5	G
436	2020-11-03 19:18:04.932	2020-11-03 19:18:04.933	203953	Jabari Parker	jabari-parker	26	6-8	245	33	F
438	2020-11-03 19:18:04.934	2020-11-03 19:18:04.935	1629610	DaQuan Jeffries	daquan-jeffries	26	6-5	230	19	G-F
440	2020-11-03 19:18:04.941	2020-11-03 19:18:04.942	1626158	Richaun Holmes	richaun-holmes	26	6-10	235	22	F
442	2020-11-03 19:18:06.614	2020-11-03 19:18:06.615	1629022	Lonnie Walker IV	lonnie-walker-iv	27	6-5	204	1	G-F
460	2020-11-03 19:18:08.036	2020-11-03 19:18:08.037	1626169	Stanley Johnson	stanley-johnson	28	6-6	242	5	F-G
479	2020-11-03 19:18:09.785	2020-11-03 19:18:09.785	1626144	Emmanuel Mudiay	emmanuel-mudiay	29	6-3	200	15	G
483	2020-11-03 19:18:09.787	2020-11-03 19:18:09.788	1629671	Miye Oni	miye-oni	29	6-5	206	81	G-F
485	2020-11-03 19:18:09.791	2020-11-03 19:18:09.792	1629625	Justin Wright-Foreman	justin-wright-foreman	29	6-0	190	3	G
488	2020-11-03 19:18:09.798	2020-11-03 19:18:09.799	1629752	Juwan Morgan	juwan-morgan	29	6-7	232	16	F
491	2020-11-03 19:18:09.805	2020-11-03 19:18:09.806	1628378	Donovan Mitchell	donovan-mitchell	29	6-1	215	45	G
495	2020-11-03 19:18:11.183	2020-11-03 19:18:11.183	1629060	Rui Hachimura	rui-hachimura	30	6-8	230	8	F
499	2020-11-03 19:18:11.185	2020-11-03 19:18:11.186	1629021	Moritz Wagner	moritz-wagner	30	6-11	245	21	F-C
506	2020-11-03 19:18:11.195	2020-11-03 19:18:11.196	1628394	Anzejs Pasecniks	anzejs-pasecniks	30	7-2	229	18	C-F
80	2020-11-03 19:17:23.01	2020-11-03 19:17:23.011	1628436	Luke Kornet	luke-kornet	5	7-2	250	2	F-C
88	2020-11-03 19:17:25.451	2020-11-03 19:17:25.452	1629012	Collin Sexton	collin-sexton	6	6-1	190	2	G
92	2020-11-03 19:17:25.455	2020-11-03 19:17:25.456	203521	Matthew Dellavedova	matthew-dellavedova	6	6-3	200	18	G
113	2020-11-03 19:17:27.063	2020-11-03 19:17:27.064	203077	Michael Kidd-Gilchrist	michael-kidd-gilchrist	7	6-6	232	9	F
122	2020-11-03 19:17:28.914	2020-11-03 19:17:28.915	1628966	Keita Bates-Diop	keita-bates-diop	8	6-8	229	6	F
195	2020-11-03 19:17:36.678	2020-11-03 19:17:36.679	1628988	Aaron Holiday	aaron-holiday	12	6-0	185	3	G
198	2020-11-03 19:17:36.683	2020-11-03 19:17:36.684	203200	Justin Holiday	justin-holiday	12	6-6	180	8	F-G
200	2020-11-03 19:17:36.686	2020-11-03 19:17:36.686	1628968	Brian Bowen II	brian-bowen-ii	12	6-6	190	10	F-G
202	2020-11-03 19:17:36.689	2020-11-03 19:17:36.689	1626167	Myles Turner	myles-turner	12	6-11	250	33	C-F
203	2020-11-03 19:17:38.807	2020-11-03 19:17:38.807	202704	Reggie Jackson	reggie-jackson	13	6-3	208	1	G
247	2020-11-03 19:17:42.727	2020-11-03 19:17:42.728	202685	Jonas Valanciunas	jonas-valanciunas	15	6-11	265	17	C
256	2020-11-03 19:17:44.124	2020-11-03 19:17:44.125	1628389	Bam Adebayo	bam-adebayo	16	6-9	255	13	C-F
277	2020-11-03 19:17:47.675	2020-11-03 19:17:47.676	101141	Ersan Ilyasova	ersan-ilyasova	17	6-9	235	7	F
290	2020-11-03 19:17:49.905	2020-11-03 19:17:49.905	1629020	Jarred Vanderbilt	jarred-vanderbilt	18	6-9	214	3	F
295	2020-11-03 19:17:49.909	2020-11-03 19:17:49.91	201949	James Johnson	james-johnson	18	6-7	240	16	F
311	2020-11-03 19:17:52.024	2020-11-03 19:17:52.025	1627742	Brandon Ingram	brandon-ingram	19	6-7	190	14	F
327	2020-11-03 19:17:54.196	2020-11-03 19:17:54.197	1629607	Jared Harper	jared-harper	20	5-10	175	12	G
338	2020-11-03 19:17:54.215	2020-11-03 19:17:54.215	203493	Reggie Bullock	reggie-bullock	20	6-6	205	25	G-F
358	2020-11-03 19:17:57.512	2020-11-03 19:17:57.513	201571	D.J. Augustin	dj-augustin	22	5-11	183	14	G
375	2020-11-03 19:17:59.953	2020-11-03 19:17:59.954	1629015	Zhaire Smith	zhaire-smith	23	6-3	205	5	G
380	2020-11-03 19:17:59.956	2020-11-03 19:17:59.957	1627788	Furkan Korkmaz	furkan-korkmaz	23	6-7	202	30	G-F
389	2020-11-03 19:17:59.976	2020-11-03 19:17:59.976	1629621	Marial Shayok	marial-shayok	23	6-5	198	35	G-F
393	2020-11-03 19:18:01.152	2020-11-03 19:18:01.153	1628975	Jevon Carter	jevon-carter	24	6-1	200	4	G
397	2020-11-03 19:18:01.155	2020-11-03 19:18:01.155	1629661	Cameron Johnson	cameron-johnson	24	6-8	210	23	F
402	2020-11-03 19:18:01.16	2020-11-03 19:18:01.161	1626163	Frank Kaminsky	frank-kaminsky	24	7-0	240	8	F-C
413	2020-11-03 19:18:03.475	2020-11-03 19:18:03.475	203918	Rodney Hood	rodney-hood	25	6-8	208	5	G-F
431	2020-11-03 19:18:04.914	2020-11-03 19:18:04.914	1627741	Buddy Hield	buddy-hield	26	6-4	220	24	G
447	2020-11-03 19:18:06.617	2020-11-03 19:18:06.617	1629683	Quinndary Weatherspoon	quinndary-weatherspoon	27	6-3	205	15	G
76	2020-11-03 19:17:23.007	2020-11-03 19:17:23.007	1628374	Lauri Markkanen	lauri-markkanen	5	7-0	240	24	F-C
95	2020-11-03 19:17:25.463	2020-11-03 19:17:25.464	1629636	Darius Garland	darius-garland	6	6-1	192	10	G
100	2020-11-03 19:17:25.476	2020-11-03 19:17:25.477	1626204	Larry Nance Jr.	larry-nance-jr	6	6-7	245	22	F-C
102	2020-11-03 19:17:25.483	2020-11-03 19:17:25.484	1627790	Ante Zizic	ante-zizic	6	6-10	266	41	C
105	2020-11-03 19:17:27.054	2020-11-03 19:17:27.054	203939	Dwight Powell	dwight-powell	7	6-10	240	7	F-C
110	2020-11-03 19:17:27.058	2020-11-03 19:17:27.058	1628382	Justin Jackson	justin-jackson	7	6-7	220	44	F
128	2020-11-03 19:17:28.924	2020-11-03 19:17:28.925	1628408	PJ Dozier	pj-dozier	8	6-6	205	35	G-F
132	2020-11-03 19:17:28.929	2020-11-03 19:17:28.93	203115	Will Barton	will-barton	8	6-5	181	5	G
134	2020-11-03 19:17:28.932	2020-11-03 19:17:28.933	1628470	Torrey Craig	torrey-craig	8	6-7	221	3	F
136	2020-11-03 19:17:28.934	2020-11-03 19:17:28.935	1629626	Bol Bol	bol-bol	8	7-2	220	10	C-F
138	2020-11-03 19:17:30.787	2020-11-03 19:17:30.788	1628379	Luke Kennard	luke-kennard	9	6-5	206	5	G
145	2020-11-03 19:17:30.791	2020-11-03 19:17:30.792	201565	Derrick Rose	derrick-rose	9	6-2	200	25	G
156	2020-11-03 19:17:32.943	2020-11-03 19:17:32.944	1626172	Kevon Looney	kevon-looney	10	6-9	222	5	F
160	2020-11-03 19:17:32.945	2020-11-03 19:17:32.946	201939	Stephen Curry	stephen-curry	10	6-3	185	30	G
170	2020-11-03 19:17:34.928	2020-11-03 19:17:34.929	203998	Bruno Caboclo	bruno-caboclo	11	6-9	218	5	F
174	2020-11-03 19:17:34.931	2020-11-03 19:17:34.931	2199	Tyson Chandler	tyson-chandler	11	7-0	235	19	C
176	2020-11-03 19:17:34.937	2020-11-03 19:17:34.938	1627863	Danuel House Jr.	danuel-house-jr	11	6-6	220	4	F-G
178	2020-11-03 19:17:34.94	2020-11-03 19:17:34.94	201601	Luc Mbah a Moute	luc-mbah-a-moute	11	6-8	230	12	F
180	2020-11-03 19:17:34.942	2020-11-03 19:17:34.943	200757	Thabo Sefolosha	thabo-sefolosha	11	6-6	215	18	F-G
182	2020-11-03 19:17:34.951	2020-11-03 19:17:34.951	203085	Austin Rivers	austin-rivers	11	6-3	200	25	G
188	2020-11-03 19:17:36.657	2020-11-03 19:17:36.658	203933	T.J. Warren	tj-warren	12	6-8	220	1	F
212	2020-11-03 19:17:38.828	2020-11-03 19:17:38.829	202695	Kawhi Leonard	kawhi-leonard	13	6-7	225	2	F
214	2020-11-03 19:17:38.832	2020-11-03 19:17:38.832	202331	Paul George	paul-george	13	6-8	220	13	F
216	2020-11-03 19:17:38.834	2020-11-03 19:17:38.835	1628405	Johnathan Motley	johnathan-motley	13	6-8	230	15	F
218	2020-11-03 19:17:38.837	2020-11-03 19:17:38.838	202335	Patrick Patterson	patrick-patterson	13	6-8	235	54	F
223	2020-11-03 19:17:40.922	2020-11-03 19:17:40.923	200765	Rajon Rondo	rajon-rondo	14	6-1	180	9	G
243	2020-11-03 19:17:42.716	2020-11-03 19:17:42.716	1629723	John Konchar	john-konchar	15	6-5	210	46	G
249	2020-11-03 19:17:42.73	2020-11-03 19:17:42.731	1629630	Ja Morant	ja-morant	15	6-3	174	12	G
251	2020-11-03 19:17:42.733	2020-11-03 19:17:42.734	1628367	Josh Jackson	josh-jackson	15	6-8	207	20	G-F
253	2020-11-03 19:17:42.736	2020-11-03 19:17:42.736	1629741	Marko Guduric	marko-guduric	15	6-6	201	23	G
258	2020-11-03 19:17:44.124	2020-11-03 19:17:44.125	1629644	KZ Okpala	kz-okpala	16	6-8	215	4	F-G
280	2020-11-03 19:17:47.675	2020-11-03 19:17:47.676	201572	Brook Lopez	brook-lopez	17	7-0	282	11	C
282	2020-11-03 19:17:47.682	2020-11-03 19:17:47.682	2594	Kyle Korver	kyle-korver	17	6-7	212	26	G-F
284	2020-11-03 19:17:47.685	2020-11-03 19:17:47.685	1628425	Sterling Brown	sterling-brown	17	6-5	219	23	G-F
286	2020-11-03 19:17:47.688	2020-11-03 19:17:47.689	101107	Marvin Williams	marvin-williams	17	6-8	237	20	F
288	2020-11-03 19:17:47.691	2020-11-03 19:17:47.691	1629244	Cameron Reynolds	cameron-reynolds	17	6-7	225	13	G-F
289	2020-11-03 19:17:49.904	2020-11-03 19:17:49.905	1626156	D'Angelo Russell	dangelo-russell	18	6-4	193	0	G
299	2020-11-03 19:17:49.911	2020-11-03 19:17:49.911	1626157	Karl-Anthony Towns	karl-anthony-towns	18	6-11	248	32	C-F
310	2020-11-03 19:17:52.024	2020-11-03 19:17:52.025	202734	E'Twaun Moore	etwaun-moore	19	6-3	191	55	G
331	2020-11-03 19:17:54.2	2020-11-03 19:17:54.201	201959	Taj Gibson	taj-gibson	20	6-9	232	67	F
334	2020-11-03 19:17:54.206	2020-11-03 19:17:54.207	203901	Elfrid Payton	elfrid-payton	20	6-3	195	6	G
361	2020-11-03 19:17:57.513	2020-11-03 19:17:57.514	1629724	Vic Law	vic-law	22	6-7	201	23	F
387	2020-11-03 19:17:59.975	2020-11-03 19:17:59.975	203954	Joel Embiid	joel-embiid	23	7-0	280	21	C-F
391	2020-11-03 19:18:01.151	2020-11-03 19:18:01.152	1629665	Jalen Lecque	jalen-lecque	24	6-4	185	0	G
406	2020-11-03 19:18:01.163	2020-11-03 19:18:01.164	1626166	Cameron Payne	cameron-payne	24	6-1	183	15	G
411	2020-11-03 19:18:03.475	2020-11-03 19:18:03.475	2772	Trevor Ariza	trevor-ariza	25	6-8	215	8	F
417	2020-11-03 19:18:03.479	2020-11-03 19:18:03.48	1629018	Gary Trent Jr.	gary-trent-jr	25	6-5	209	2	G-F
419	2020-11-03 19:18:03.482	2020-11-03 19:18:03.482	2546	Carmelo Anthony	carmelo-anthony	25	6-8	238	00	F
422	2020-11-03 19:18:03.485	2020-11-03 19:18:03.486	1628380	Zach Collins	zach-collins	25	6-11	250	33	F-C
432	2020-11-03 19:18:04.913	2020-11-03 19:18:04.914	1628385	Harry Giles III	harry-giles-iii	26	6-11	240	20	F-C
434	2020-11-03 19:18:04.929	2020-11-03 19:18:04.93	203992	Bogdan Bogdanovic	bogdan-bogdanovic	26	6-6	220	8	G
445	2020-11-03 19:18:06.615	2020-11-03 19:18:06.615	1628401	Derrick White	derrick-white	27	6-4	190	4	G
75	2020-11-03 19:17:23.007	2020-11-03 19:17:23.008	203107	Tomas Satoransky	tomas-satoransky	5	6-7	210	31	G
87	2020-11-03 19:17:25.451	2020-11-03 19:17:25.452	201567	Kevin Love	kevin-love	6	6-8	251	0	F-C
94	2020-11-03 19:17:25.459	2020-11-03 19:17:25.459	203957	Dante Exum	dante-exum	6	6-5	214	1	G
111	2020-11-03 19:17:27.061	2020-11-03 19:17:27.061	1628499	Antonius Cleveland	antonius-cleveland	7	6-5	195	3	G
129	2020-11-03 19:17:28.924	2020-11-03 19:17:28.925	1628427	Vlatko Cancar	vlatko-cancar	8	6-8	236	31	F
131	2020-11-03 19:17:28.928	2020-11-03 19:17:28.929	203584	Troy Daniels	troy-daniels	8	6-4	200	30	G
142	2020-11-03 19:17:30.79	2020-11-03 19:17:30.79	1629648	Jordan Bone	jordan-bone	9	6-3	180	18	G
194	2020-11-03 19:17:36.662	2020-11-03 19:17:36.662	1628388	TJ Leaf	tj-leaf	12	6-10	222	22	F
204	2020-11-03 19:17:38.809	2020-11-03 19:17:38.809	203585	Rodney McGruder	rodney-mcgruder	13	6-4	205	19	G
228	2020-11-03 19:17:40.926	2020-11-03 19:17:40.927	2730	Dwight Howard	dwight-howard	14	6-10	265	39	C-F
231	2020-11-03 19:17:40.93	2020-11-03 19:17:40.93	201580	JaVale McGee	javale-mcgee	14	7-0	270	7	C-F
233	2020-11-03 19:17:40.932	2020-11-03 19:17:40.933	1627936	Alex Caruso	alex-caruso	14	6-5	186	4	G
235	2020-11-03 19:17:40.935	2020-11-03 19:17:40.935	2544	LeBron James	lebron-james	14	6-9	250	23	F
237	2020-11-03 19:17:40.946	2020-11-03 19:17:40.947	202693	Markieff Morris	markieff-morris	14	6-8	245	88	F
246	2020-11-03 19:17:42.712	2020-11-03 19:17:42.712	203937	Kyle Anderson	kyle-anderson	15	6-9	230	1	F-G
263	2020-11-03 19:17:44.127	2020-11-03 19:17:44.128	203109	Jae Crowder	jae-crowder	16	6-6	235	99	F
276	2020-11-03 19:17:47.675	2020-11-03 19:17:47.675	203114	Khris Middleton	khris-middleton	17	6-7	222	22	F
298	2020-11-03 19:17:49.912	2020-11-03 19:17:49.913	202323	Evan Turner	evan-turner	18	6-6	220	1	G-F
303	2020-11-03 19:17:49.934	2020-11-03 19:17:49.934	1627823	Juancho Hernangomez	juancho-hernangomez	18	6-9	214	41	F
308	2020-11-03 19:17:52.016	2020-11-03 19:17:52.016	201950	Jrue Holiday	jrue-holiday	19	6-3	205	11	G
344	2020-11-03 19:17:56.032	2020-11-03 19:17:56.033	203500	Steven Adams	steven-adams	21	6-11	265	12	C
348	2020-11-03 19:17:56.035	2020-11-03 19:17:56.036	203488	Mike Muscala	mike-muscala	21	6-10	240	33	F-C
350	2020-11-03 19:17:56.038	2020-11-03 19:17:56.039	1628977	Hamidou Diallo	hamidou-diallo	21	6-5	202	6	G
352	2020-11-03 19:17:56.041	2020-11-03 19:17:56.041	1627846	Abdel Nader	abdel-nader	21	6-5	225	11	F
362	2020-11-03 19:17:57.512	2020-11-03 19:17:57.512	1629109	Gary Clark	gary-clark	22	6-6	225	12	F
367	2020-11-03 19:17:57.53	2020-11-03 19:17:57.53	1628964	Mo Bamba	mo-bamba	22	7-0	231	5	C
369	2020-11-03 19:17:57.533	2020-11-03 19:17:57.533	203082	Terrence Ross	terrence-ross	22	6-6	206	31	G-F
371	2020-11-03 19:17:57.536	2020-11-03 19:17:57.537	1628365	Markelle Fultz	markelle-fultz	22	6-3	209	20	G
373	2020-11-03 19:17:57.539	2020-11-03 19:17:57.539	1629168	BJ Johnson	bj-johnson	22	6-7	200	13	F
377	2020-11-03 19:17:59.954	2020-11-03 19:17:59.955	1629003	Shake Milton	shake-milton	23	6-5	205	18	G-F
383	2020-11-03 19:17:59.96	2020-11-03 19:17:59.961	203124	Kyle O'Quinn	kyle-oquinn	23	6-9	250	9	C-F
390	2020-11-03 19:17:59.977	2020-11-03 19:17:59.978	201143	Al Horford	al-horford	23	6-9	240	42	C-F
394	2020-11-03 19:18:01.153	2020-11-03 19:18:01.153	1629660	Ty Jerome	ty-jerome	24	6-5	195	10	G-F
398	2020-11-03 19:18:01.155	2020-11-03 19:18:01.156	1629745	Tariq Owens	tariq-owens	24	6-10	205	41	F
403	2020-11-03 19:18:01.159	2020-11-03 19:18:01.159	1626162	Kelly Oubre Jr.	kelly-oubre-jr	24	6-7	203	3	F-G
412	2020-11-03 19:18:03.475	2020-11-03 19:18:03.475	203468	CJ McCollum	cj-mccollum	25	6-3	190	3	G
426	2020-11-03 19:18:04.911	2020-11-03 19:18:04.912	1629657	Kyle Guy	kyle-guy	26	6-1	167	7	G
443	2020-11-03 19:18:06.619	2020-11-03 19:18:06.619	1626168	Trey Lyles	trey-lyles	27	6-9	234	41	F
81	2020-11-03 19:17:23.013	2020-11-03 19:17:23.014	1629655	Daniel Gafford	daniel-gafford	5	6-10	234	12	F-C
91	2020-11-03 19:17:25.454	2020-11-03 19:17:25.455	202684	Tristan Thompson	tristan-thompson	6	6-9	254	13	C-F
114	2020-11-03 19:17:27.064	2020-11-03 19:17:27.065	1626153	Delon Wright	delon-wright	7	6-5	185	55	G
117	2020-11-03 19:17:27.077	2020-11-03 19:17:27.078	1629729	Josh Reaves	josh-reaves	7	6-4	214	23	G-F
119	2020-11-03 19:17:27.081	2020-11-03 19:17:27.081	1628467	Maxi Kleber	maxi-kleber	7	6-10	240	42	F
124	2020-11-03 19:17:28.915	2020-11-03 19:17:28.916	203924	Jerami Grant	jerami-grant	8	6-8	210	9	F
141	2020-11-03 19:17:30.789	2020-11-03 19:17:30.79	1629663	Louis King	louis-king	9	6-7	205	14	F
193	2020-11-03 19:17:36.662	2020-11-03 19:17:36.663	203087	Jeremy Lamb	jeremy-lamb	12	6-5	180	26	G-F
196	2020-11-03 19:17:36.68	2020-11-03 19:17:36.68	1628410	Edmond Sumner	edmond-sumner	12	6-4	196	5	G
206	2020-11-03 19:17:38.808	2020-11-03 19:17:38.808	1629599	Amir Coffey	amir-coffey	13	6-7	210	7	G-F
227	2020-11-03 19:17:40.925	2020-11-03 19:17:40.926	1626188	Quinn Cook	quinn-cook	14	6-1	180	28	G
230	2020-11-03 19:17:40.928	2020-11-03 19:17:40.929	203079	Dion Waiters	dion-waiters	14	6-3	210	18	G
241	2020-11-03 19:17:42.713	2020-11-03 19:17:42.714	1628991	Jaren Jackson Jr.	jaren-jackson-jr	15	6-11	242	13	F-C
248	2020-11-03 19:17:42.729	2020-11-03 19:17:42.73	1628960	Grayson Allen	grayson-allen	15	6-4	198	3	G
250	2020-11-03 19:17:42.732	2020-11-03 19:17:42.732	1629007	Jontay Porter	jontay-porter	15	6-11	240	 	C-F
252	2020-11-03 19:17:42.734	2020-11-03 19:17:42.735	201229	Anthony Tolliver	anthony-tolliver	15	6-8	240	44	F
254	2020-11-03 19:17:42.738	2020-11-03 19:17:42.739	203476	Gorgui Dieng	gorgui-dieng	15	6-10	252	14	C
259	2020-11-03 19:17:44.124	2020-11-03 19:17:44.125	1629734	Kyle Alexander	kyle-alexander	16	6-10	216	17	F-C
264	2020-11-03 19:17:44.128	2020-11-03 19:17:44.129	1629216	Gabe Vincent	gabe-vincent	16	6-3	200	2	G
266	2020-11-03 19:17:44.131	2020-11-03 19:17:44.131	1627884	Derrick Jones Jr.	derrick-jones-jr	16	6-6	210	5	F
268	2020-11-03 19:17:44.133	2020-11-03 19:17:44.134	202710	Jimmy Butler	jimmy-butler	16	6-7	230	22	F
270	2020-11-03 19:17:44.142	2020-11-03 19:17:44.143	2617	Udonis Haslem	udonis-haslem	16	6-8	235	40	F
272	2020-11-03 19:17:47.674	2020-11-03 19:17:47.675	1628978	Donte DiVincenzo	donte-divincenzo	17	6-4	203	0	G
313	2020-11-03 19:17:52.024	2020-11-03 19:17:52.025	1629740	Nicolo Melli	nicolo-melli	19	6-9	236	20	F
316	2020-11-03 19:17:52.028	2020-11-03 19:17:52.029	1629637	Jaxson Hayes	jaxson-hayes	19	6-11	220	10	C-F
318	2020-11-03 19:17:52.03	2020-11-03 19:17:52.031	1629627	Zion Williamson	zion-williamson	19	6-6	284	1	F
320	2020-11-03 19:17:52.034	2020-11-03 19:17:52.034	1628402	Frank Jackson	frank-jackson	19	6-3	205	15	G
322	2020-11-03 19:17:52.037	2020-11-03 19:17:52.038	203121	Darius Miller	darius-miller	19	6-6	225	21	F
326	2020-11-03 19:17:54.195	2020-11-03 19:17:54.196	1629628	RJ Barrett	rj-barrett	20	6-6	214	9	F-G
332	2020-11-03 19:17:54.202	2020-11-03 19:17:54.202	1629033	Theo Pinson	theo-pinson	20	6-5	212	1	G-F
339	2020-11-03 19:17:54.211	2020-11-03 19:17:54.212	1629649	Ignas Brazdeikis	ignas-brazdeikis	20	6-6	221	17	F
343	2020-11-03 19:17:56.032	2020-11-03 19:17:56.032	203457	Nerlens Noel	nerlens-noel	21	6-10	220	9	C-F
347	2020-11-03 19:17:56.034	2020-11-03 19:17:56.035	1628390	Terrance Ferguson	terrance-ferguson	21	6-6	190	23	G
353	2020-11-03 19:17:56.045	2020-11-03 19:17:56.045	203471	Dennis Schroder	dennis-schroder	21	6-1	172	17	G
357	2020-11-03 19:17:57.51	2020-11-03 19:17:57.511	202329	Al-Farouq Aminu	al-farouq-aminu	22	6-8	220	2	F
388	2020-11-03 19:17:59.975	2020-11-03 19:17:59.975	203526	Raul Neto	raul-neto	23	6-1	180	19	G
392	2020-11-03 19:18:01.152	2020-11-03 19:18:01.152	1629059	Elie Okobo	elie-okobo	24	6-3	190	2	F-G
396	2020-11-03 19:18:01.154	2020-11-03 19:18:01.155	203967	Dario Saric	dario-saric	24	6-10	225	20	F
400	2020-11-03 19:18:01.162	2020-11-03 19:18:01.162	201937	Ricky Rubio	ricky-rubio	24	6-3	190	11	G
408	2020-11-03 19:18:03.474	2020-11-03 19:18:03.475	203081	Damian Lillard	damian-lillard	25	6-2	195	0	G
429	2020-11-03 19:18:04.914	2020-11-03 19:18:04.915	203145	Kent Bazemore	kent-bazemore	26	6-4	195	26	G-F
446	2020-11-03 19:18:06.617	2020-11-03 19:18:06.618	1629677	Luka Samanic	luka-samanic	27	6-10	227	19	F
115	2020-11-03 19:17:27.064	2020-11-03 19:17:27.065	1629029	Luka Doncic	luka-doncic	7	6-7	230	77	F-G
118	2020-11-03 19:17:27.079	2020-11-03 19:17:27.08	1626246	Boban Marjanovic	boban-marjanovic	7	7-4	290	51	C
125	2020-11-03 19:17:28.913	2020-11-03 19:17:28.914	1629008	Michael Porter Jr.	michael-porter-jr	8	6-10	218	1	F
139	2020-11-03 19:17:30.788	2020-11-03 19:17:30.788	1627748	Thon Maker	thon-maker	9	7-0	221	7	F-C
144	2020-11-03 19:17:30.79	2020-11-03 19:17:30.791	202688	Brandon Knight	brandon-knight	9	6-2	182	20	G
153	2020-11-03 19:17:30.81	2020-11-03 19:17:30.81	1629635	Sekou Doumbouya	sekou-doumbouya	9	6-8	230	45	F
155	2020-11-03 19:17:32.942	2020-11-03 19:17:32.943	1627814	Damion Lee	damion-lee	10	6-5	210	1	G-F
159	2020-11-03 19:17:32.945	2020-11-03 19:17:32.946	203952	Andrew Wiggins	andrew-wiggins	10	6-7	197	22	F
168	2020-11-03 19:17:34.927	2020-11-03 19:17:34.928	201566	Russell Westbrook	russell-westbrook	11	6-3	200	0	G
187	2020-11-03 19:17:36.66	2020-11-03 19:17:36.661	1627734	Domantas Sabonis	domantas-sabonis	12	6-11	240	11	F-C
197	2020-11-03 19:17:36.681	2020-11-03 19:17:36.682	203926	Doug McDermott	doug-mcdermott	12	6-7	225	20	F
199	2020-11-03 19:17:36.685	2020-11-03 19:17:36.685	1628993	Alize Johnson	alize-johnson	12	6-7	212	24	F
201	2020-11-03 19:17:36.687	2020-11-03 19:17:36.688	203960	JaKarr Sampson	jakarr-sampson	12	6-7	214	14	F
208	2020-11-03 19:17:38.808	2020-11-03 19:17:38.809	1629611	Terance Mann	terance-mann	13	6-5	215	14	G-F
222	2020-11-03 19:17:40.921	2020-11-03 19:17:40.921	203076	Anthony Davis	anthony-davis	14	6-10	253	3	F-C
239	2020-11-03 19:17:42.711	2020-11-03 19:17:42.712	1629001	De'Anthony Melton	deanthony-melton	15	6-2	200	0	G
261	2020-11-03 19:17:44.126	2020-11-03 19:17:44.126	1629735	Chris Silva	chris-silva	16	6-8	234	30	F
274	2020-11-03 19:17:47.674	2020-11-03 19:17:47.675	203648	Thanasis Antetokounmpo	thanasis-antetokounmpo	17	6-6	219	43	F
294	2020-11-03 19:17:49.915	2020-11-03 19:17:49.915	1629162	Jordan McLaughlin	jordan-mclaughlin	18	5-11	185	6	G
302	2020-11-03 19:17:49.932	2020-11-03 19:17:49.933	1629103	Kelan Martin	kelan-martin	18	6-5	230	30	F
304	2020-11-03 19:17:49.935	2020-11-03 19:17:49.935	1629006	Josh Okogie	josh-okogie	18	6-4	213	20	G
309	2020-11-03 19:17:52.015	2020-11-03 19:17:52.016	1626143	Jahlil Okafor	jahlil-okafor	19	6-10	270	9	C-F
366	2020-11-03 19:17:57.528	2020-11-03 19:17:57.529	202696	Nikola Vucevic	nikola-vucevic	22	6-11	260	9	C
376	2020-11-03 19:17:59.954	2020-11-03 19:17:59.954	202699	Tobias Harris	tobias-harris	23	6-8	226	12	F
381	2020-11-03 19:17:59.957	2020-11-03 19:17:59.957	203922	Glenn Robinson III	glenn-robinson-iii	23	6-6	222	40	F
414	2020-11-03 19:18:03.475	2020-11-03 19:18:03.475	1629121	Jaylen Adams	jaylen-adams	25	6-0	225	10	G
427	2020-11-03 19:18:04.912	2020-11-03 19:18:04.913	202709	Cory Joseph	cory-joseph	26	6-3	200	9	G
444	2020-11-03 19:18:06.615	2020-11-03 19:18:06.616	1629002	Chimezie Metu	chimezie-metu	27	6-9	225	7	F-C
116	2020-11-03 19:17:27.076	2020-11-03 19:17:27.076	203501	Tim Hardaway Jr.	tim-hardaway-jr	7	6-5	205	11	G-F
120	2020-11-03 19:17:27.082	2020-11-03 19:17:27.083	203504	Trey Burke	trey-burke	7	6-0	185	32	G
121	2020-11-03 19:17:28.914	2020-11-03 19:17:28.914	200794	Paul Millsap	paul-millsap	8	6-7	257	4	F
147	2020-11-03 19:17:30.796	2020-11-03 19:17:30.796	1628971	Bruce Brown	bruce-brown	9	6-4	202	6	G-F
152	2020-11-03 19:17:30.809	2020-11-03 19:17:30.809	203089	John Henson	john-henson	9	6-9	219	31	F-C
162	2020-11-03 19:17:32.947	2020-11-03 19:17:32.948	1629673	Jordan Poole	jordan-poole	10	6-4	194	3	G
164	2020-11-03 19:17:32.95	2020-11-03 19:17:32.951	202691	Klay Thompson	klay-thompson	10	6-6	215	11	G
167	2020-11-03 19:17:32.958	2020-11-03 19:17:32.958	1627737	Marquese Chriss	marquese-chriss	10	6-9	240	32	F
171	2020-11-03 19:17:34.929	2020-11-03 19:17:34.93	201569	Eric Gordon	eric-gordon	11	6-3	215	10	G
175	2020-11-03 19:17:34.936	2020-11-03 19:17:34.936	1628021	David Nwaba	david-nwaba	11	6-5	219	0	G-F
177	2020-11-03 19:17:34.938	2020-11-03 19:17:34.939	201960	DeMarre Carroll	demarre-carroll	11	6-6	215	9	F
179	2020-11-03 19:17:34.941	2020-11-03 19:17:34.942	203463	Ben McLemore	ben-mclemore	11	6-3	195	16	G
181	2020-11-03 19:17:34.943	2020-11-03 19:17:34.944	1626187	Michael Frazier	michael-frazier	11	6-3	200	21	G
183	2020-11-03 19:17:34.951	2020-11-03 19:17:34.952	201145	Jeff Green	jeff-green	11	6-8	235	32	F
191	2020-11-03 19:17:36.658	2020-11-03 19:17:36.659	203506	Victor Oladipo	victor-oladipo	12	6-4	213	4	G
207	2020-11-03 19:17:38.811	2020-11-03 19:17:38.812	201149	Joakim Noah	joakim-noah	13	6-11	232	55	F-C
220	2020-11-03 19:17:40.92	2020-11-03 19:17:40.921	1628398	Kyle Kuzma	kyle-kuzma	14	6-8	221	0	F
245	2020-11-03 19:17:42.715	2020-11-03 19:17:42.715	1626145	Tyus Jones	tyus-jones	15	6-0	196	21	G
255	2020-11-03 19:17:44.124	2020-11-03 19:17:44.125	203086	Meyers Leonard	meyers-leonard	16	7-0	260	0	F-C
279	2020-11-03 19:17:47.675	2020-11-03 19:17:47.676	1628391	D.J. Wilson	dj-wilson	17	6-10	231	5	F
291	2020-11-03 19:17:49.905	2020-11-03 19:17:49.906	1627736	Malik Beasley	malik-beasley	18	6-4	187	5	G
296	2020-11-03 19:17:49.91	2020-11-03 19:17:49.911	1629633	Jarrett Culver	jarrett-culver	18	6-6	195	23	G-F
314	2020-11-03 19:17:52.024	2020-11-03 19:17:52.025	1629597	Zylan Cheatham	zylan-cheatham	19	6-5	220	45	F
317	2020-11-03 19:17:52.029	2020-11-03 19:17:52.03	1627982	Josh Gray	josh-gray	19	6-0	180	5	G
319	2020-11-03 19:17:52.032	2020-11-03 19:17:52.032	1628414	Sindarius Thornwell	sindarius-thornwell	19	6-4	215	12	G
321	2020-11-03 19:17:52.035	2020-11-03 19:17:52.036	1629026	Kenrich Williams	kenrich-williams	19	6-6	210	34	G-F
324	2020-11-03 19:17:54.193	2020-11-03 19:17:54.194	201961	Wayne Ellington	wayne-ellington	20	6-4	207	2	G
330	2020-11-03 19:17:54.197	2020-11-03 19:17:54.198	1628995	Kevin Knox II	kevin-knox-ii	20	6-7	215	20	F
337	2020-11-03 19:17:54.212	2020-11-03 19:17:54.213	1629624	Kenny Wooten	kenny-wooten	20	6-8	235	45	F
342	2020-11-03 19:17:56.031	2020-11-03 19:17:56.032	1629647	Darius Bazley	darius-bazley	21	6-8	208	7	F-G
346	2020-11-03 19:17:56.034	2020-11-03 19:17:56.034	203460	Andre Roberson	andre-roberson	21	6-7	210	21	G-F
349	2020-11-03 19:17:56.037	2020-11-03 19:17:56.037	101108	Chris Paul	chris-paul	21	6-1	175	3	G
351	2020-11-03 19:17:56.039	2020-11-03 19:17:56.04	201568	Danilo Gallinari	danilo-gallinari	21	6-10	233	8	F
354	2020-11-03 19:17:56.042	2020-11-03 19:17:56.043	1628985	Devon Hall	devon-hall	21	6-5	215	14	G
364	2020-11-03 19:17:57.509	2020-11-03 19:17:57.51	203932	Aaron Gordon	aaron-gordon	22	6-8	235	00	F
374	2020-11-03 19:17:59.953	2020-11-03 19:17:59.953	1626196	Josh Richardson	josh-richardson	23	6-5	200	0	G
379	2020-11-03 19:17:59.955	2020-11-03 19:17:59.956	1629680	Matisse Thybulle	matisse-thybulle	23	6-5	201	22	G-F
382	2020-11-03 19:17:59.959	2020-11-03 19:17:59.959	203118	Mike Scott	mike-scott	23	6-7	237	1	F
405	2020-11-03 19:18:01.167	2020-11-03 19:18:01.168	203382	Aron Baynes	aron-baynes	24	6-10	260	46	C-F
409	2020-11-03 19:18:03.474	2020-11-03 19:18:03.475	1629117	Wenyen Gabriel	wenyen-gabriel	25	6-9	205	35	F
428	2020-11-03 19:18:04.916	2020-11-03 19:18:04.917	202357	Nemanja Bjelica	nemanja-bjelica	26	6-10	234	88	F
435	2020-11-03 19:18:04.931	2020-11-03 19:18:04.931	203084	Harrison Barnes	harrison-barnes	26	6-8	225	40	F
437	2020-11-03 19:18:04.933	2020-11-03 19:18:04.934	203458	Alex Len	alex-len	26	7-0	250	25	C
439	2020-11-03 19:18:04.937	2020-11-03 19:18:04.937	1629713	Justin James	justin-james	26	6-7	190	10	G-F
441	2020-11-03 19:18:06.616	2020-11-03 19:18:06.616	201942	DeMar DeRozan	demar-derozan	27	6-6	220	10	G-F
451	2020-11-03 19:18:06.629	2020-11-03 19:18:06.63	1627749	Dejounte Murray	dejounte-murray	27	6-4	180	5	G
453	2020-11-03 19:18:06.632	2020-11-03 19:18:06.633	201158	Marco Belinelli	marco-belinelli	27	6-5	220	18	G
455	2020-11-03 19:18:06.636	2020-11-03 19:18:06.636	1629640	Keldon Johnson	keldon-johnson	27	6-5	220	3	F-G
458	2020-11-03 19:18:08.035	2020-11-03 19:18:08.035	1629056	Terence Davis	terence-davis	28	6-4	201	0	G
463	2020-11-03 19:18:08.038	2020-11-03 19:18:08.038	1629744	Matt Thomas	matt-thomas	28	6-4	190	21	G
467	2020-11-03 19:18:08.04	2020-11-03 19:18:08.041	1628778	Paul Watson	paul-watson	28	6-6	210	1	G
469	2020-11-03 19:18:08.045	2020-11-03 19:18:08.046	200768	Kyle Lowry	kyle-lowry	28	6-0	196	7	G
471	2020-11-03 19:18:08.05	2020-11-03 19:18:08.05	1629608	Dewan Hernandez	dewan-hernandez	28	6-10	235	20	C-F
473	2020-11-03 19:18:08.061	2020-11-03 19:18:08.062	1626181	Norman Powell	norman-powell	28	6-3	215	24	G
476	2020-11-03 19:18:09.783	2020-11-03 19:18:09.783	204060	Joe Ingles	joe-ingles	29	6-7	220	2	F-G
480	2020-11-03 19:18:09.785	2020-11-03 19:18:09.786	202334	Ed Davis	ed-davis	29	6-9	218	17	C-F
484	2020-11-03 19:18:09.79	2020-11-03 19:18:09.791	203903	Jordan Clarkson	jordan-clarkson	29	6-4	194	00	G
487	2020-11-03 19:18:09.796	2020-11-03 19:18:09.797	1628396	Tony Bradley	tony-bradley	29	6-10	248	13	C-F
489	2020-11-03 19:18:09.801	2020-11-03 19:18:09.801	1626220	Royce O'Neale	royce-oneale	29	6-4	226	23	F
492	2020-11-03 19:18:11.181	2020-11-03 19:18:11.182	1629678	Admiral Schofield	admiral-schofield	30	6-5	241	1	G-F
77	2020-11-03 19:17:23.008	2020-11-03 19:17:23.009	1628976	Wendell Carter Jr.	wendell-carter-jr	5	6-9	270	34	C-F
99	2020-11-03 19:17:25.475	2020-11-03 19:17:25.475	1626224	Cedi Osman	cedi-osman	6	6-7	230	16	F
101	2020-11-03 19:17:25.48	2020-11-03 19:17:25.48	1629760	Matt Mooney	matt-mooney	6	6-2	199	31	G
104	2020-11-03 19:17:27.053	2020-11-03 19:17:27.053	200826	J.J. Barea	jj-barea	7	5-10	180	5	G
108	2020-11-03 19:17:27.056	2020-11-03 19:17:27.057	203552	Seth Curry	seth-curry	7	6-2	185	30	G
123	2020-11-03 19:17:28.916	2020-11-03 19:17:28.917	203999	Nikola Jokic	nikola-jokic	8	7-0	284	15	C
146	2020-11-03 19:17:30.794	2020-11-03 19:17:30.795	203895	Jordan McRae	jordan-mcrae	9	6-5	179	52	G
149	2020-11-03 19:17:30.8	2020-11-03 19:17:30.801	1629017	Khyri Thomas	khyri-thomas	9	6-3	210	13	G
151	2020-11-03 19:17:30.807	2020-11-03 19:17:30.808	1629004	Svi Mykhailiuk	svi-mykhailiuk	9	6-7	205	19	G-F
158	2020-11-03 19:17:32.944	2020-11-03 19:17:32.945	1629065	Ky Bowman	ky-bowman	10	6-1	187	12	G
189	2020-11-03 19:17:36.661	2020-11-03 19:17:36.662	1628513	Naz Mitrou-Long	naz-mitrou-long	12	6-3	218	15	G
210	2020-11-03 19:17:38.811	2020-11-03 19:17:38.811	1627826	Ivica Zubac	ivica-zubac	13	7-0	240	40	C
225	2020-11-03 19:17:40.924	2020-11-03 19:17:40.924	201980	Danny Green	danny-green	14	6-6	215	14	G
238	2020-11-03 19:17:42.715	2020-11-03 19:17:42.716	1628415	Dillon Brooks	dillon-brooks	15	6-7	225	24	G-F
257	2020-11-03 19:17:44.124	2020-11-03 19:17:44.125	201609	Goran Dragic	goran-dragic	16	6-3	190	7	G
278	2020-11-03 19:17:47.675	2020-11-03 19:17:47.676	1628412	Frank Mason	frank-mason	17	5-11	190	15	G
292	2020-11-03 19:17:49.906	2020-11-03 19:17:49.906	1627774	Jake Layman	jake-layman	18	6-8	209	10	F
301	2020-11-03 19:17:49.93	2020-11-03 19:17:49.931	1629016	Omari Spellman	omari-spellman	18	6-8	245	14	F
306	2020-11-03 19:17:52.014	2020-11-03 19:17:52.014	1629638	Nickeil Alexander-Walker	nickeil-alexander-walker	19	6-5	205	0	G
359	2020-11-03 19:17:57.514	2020-11-03 19:17:57.514	1628411	Wes Iwundu	wes-iwundu	22	6-6	195	25	F
386	2020-11-03 19:17:59.974	2020-11-03 19:17:59.975	1627732	Ben Simmons	ben-simmons	23	6-10	240	25	G-F
395	2020-11-03 19:18:01.153	2020-11-03 19:18:01.154	1627767	Cheick Diallo	cheick-diallo	24	6-8	219	14	F-C
399	2020-11-03 19:18:01.157	2020-11-03 19:18:01.158	1626164	Devin Booker	devin-booker	24	6-5	206	1	G
415	2020-11-03 19:18:03.475	2020-11-03 19:18:03.476	1629014	Anfernee Simons	anfernee-simons	25	6-3	181	1	G
430	2020-11-03 19:18:04.915	2020-11-03 19:18:04.915	1628963	Marvin Bagley III	marvin-bagley-iii	26	6-11	235	35	F
448	2020-11-03 19:18:06.618	2020-11-03 19:18:06.619	1627751	Jakob Poeltl	jakob-poeltl	27	7-1	245	25	C
457	2020-11-03 19:18:06.638	2020-11-03 19:18:06.639	1627854	Bryn Forbes	bryn-forbes	27	6-2	205	11	G
461	2020-11-03 19:18:08.036	2020-11-03 19:18:08.037	201586	Serge Ibaka	serge-ibaka	28	7-0	235	9	F
465	2020-11-03 19:18:08.039	2020-11-03 19:18:08.039	1628449	Chris Boucher	chris-boucher	28	6-9	200	25	F-C
468	2020-11-03 19:18:08.042	2020-11-03 19:18:08.043	1626178	Rondae Hollis-Jefferson	rondae-hollis-jefferson	28	6-6	217	4	F
470	2020-11-03 19:18:08.047	2020-11-03 19:18:08.048	1629052	Oshae Brissett	oshae-brissett	28	6-7	210	12	F-G
472	2020-11-03 19:18:08.052	2020-11-03 19:18:08.052	1627775	Patrick McCaw	patrick-mccaw	28	6-7	181	22	G
474	2020-11-03 19:18:08.062	2020-11-03 19:18:08.063	201188	Marc Gasol	marc-gasol	28	6-11	255	33	C
478	2020-11-03 19:18:09.784	2020-11-03 19:18:09.785	201144	Mike Conley	mike-conley	29	6-1	175	10	G
482	2020-11-03 19:18:09.787	2020-11-03 19:18:09.787	202711	Bojan Bogdanovic	bojan-bogdanovic	29	6-8	226	44	F
486	2020-11-03 19:18:09.794	2020-11-03 19:18:09.795	1629730	Rayjon Tucker	rayjon-tucker	29	6-3	209	6	G
490	2020-11-03 19:18:09.803	2020-11-03 19:18:09.804	1627777	Georges Niang	georges-niang	29	6-7	230	31	F
493	2020-11-03 19:18:11.182	2020-11-03 19:18:11.182	203078	Bradley Beal	bradley-beal	30	6-3	207	3	G
497	2020-11-03 19:18:11.184	2020-11-03 19:18:11.184	1629067	Isaac Bonga	isaac-bonga	30	6-8	180	17	G
501	2020-11-03 19:18:11.187	2020-11-03 19:18:11.188	202322	John Wall	john-wall	30	6-4	210	2	G
503	2020-11-03 19:18:11.19	2020-11-03 19:18:11.19	1627784	Jarrod Uthoff	jarrod-uthoff	30	6-9	220	7	F
505	2020-11-03 19:18:11.193	2020-11-03 19:18:11.194	202397	Ish Smith	ish-smith	30	6-0	175	14	G
508	2020-11-03 19:18:11.199	2020-11-03 19:18:11.2	1626170	Jerian Grant	jerian-grant	30	6-4	198	22	G
509	2020-11-03 19:18:11.213	2020-11-03 19:18:11.214	202722	Davis Bertans	davis-bertans	30	6-10	225	42	F
\.


--
-- Data for Name: Team; Type: TABLE DATA; Schema: public; Owner: tundera
--

COPY public."Team" (id, "createdAt", "updatedAt", handle, name, slug, city, abbreviation, logo, wins, losses, "winPercentage", conference, division, established, "primaryColor", "secondaryColor", "logoSlug") FROM stdin;
30	2020-11-03 19:18:10.935	2020-11-03 19:18:10.935	1610612764	Wizards	wizards	Washington	WAS	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526604/nba-logos/washington-wizards-logo.png	25	47	0.347000000000000000000000000000	East	Southeast	1961	# 002B5C	#E31837	washington-wizards-logo
29	2020-11-03 19:18:09.482	2020-11-03 19:18:09.483	1610612762	Jazz	jazz	Utah	UTA	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526604/nba-logos/utah-jazz-logo.png	44	28	0.611000000000000000000000000000	West	Northwest	1974	#002B5C	#F9A01B	utah-jazz-logo
24	2020-11-03 19:18:00.913	2020-11-03 19:18:00.913	1610612756	Suns	suns	Phoenix	PHX	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526603/nba-logos/phoenix-suns-logo.png	34	39	0.466000000000000000000000000000	West	Pacific	1968	#1D1160	#E56020	phoenix-suns-logo
27	2020-11-03 19:18:06.306	2020-11-03 19:18:06.307	1610612759	Spurs	spurs	San Antonio	SAS	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526604/nba-logos/san-antonio-spurs-logo.png	32	39	0.451000000000000000000000000000	West	Southwest	1976	#C4CED4	#000000	san-antonio-spurs-logo
16	2020-11-03 19:17:43.929	2020-11-03 19:17:43.93	1610612748	Heat	heat	Miami	MIA	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526603/nba-logos/miami-heat-logo.png	44	29	0.603000000000000000000000000000	East	Southeast	1988	#98002E	#000000	miami-heat-logo
26	2020-11-03 19:18:04.693	2020-11-03 19:18:04.693	1610612758	Kings	kings	Sacramento	SAC	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526603/nba-logos/sacramento-kings-logo.png	31	41	0.431000000000000000000000000000	West	Pacific	1948	#5A2D81	#63727A	sacramento-kings-logo
15	2020-11-03 19:17:42.511	2020-11-03 19:17:42.512	1610612763	Grizzlies	grizzlies	Memphis	MEM	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526602/nba-logos/memphis-grizzlies-logo.png	34	39	0.466000000000000000000000000000	West	Southwest	1995	#5D76A9	#12173F	memphis-grizzlies-logo
21	2020-11-03 19:17:55.754	2020-11-03 19:17:55.755	1610612760	Thunder	thunder	Oklahoma City	OKC	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526602/nba-logos/oklahoma-city-thunder-logo.png	44	28	0.611000000000000000000000000000	West	Northwest	1967	#007AC1	#EF3B24	oklahoma-city-thunder-logo
7	2020-11-03 19:17:26.866	2020-11-03 19:17:26.867	1610612742	Mavericks	mavericks	Dallas	DAL	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526601/nba-logos/dallas-mavericks-logo.png	43	32	0.573000000000000000000000000000	West	Southwest	1980	#00538C	#B8C4CA	dallas-mavericks-logo
20	2020-11-03 19:17:53.761	2020-11-03 19:17:53.761	1610612752	Knicks	knicks	New York	NYK	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526603/nba-logos/new-york-knicks-logo.png	21	45	0.318000000000000000000000000000	East	Atlantic	1946	#006BB6	#F58426	new-york-knicks-logo
13	2020-11-03 19:17:38.262	2020-11-03 19:17:38.262	1610612746	Clippers	clippers	Los Angeles	LAC	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526602/nba-logos/los-angeles-clippers-logo.png	49	23	0.681000000000000000000000000000	West	Pacific	1970	#C8102E	#1D428A	los-angeles-clippers-logo
19	2020-11-03 19:17:51.797	2020-11-03 19:17:51.798	1610612740	Pelicans	pelicans	New Orleans	NOP	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526604/nba-logos/new-orleans-pelicans-logo.png	30	42	0.417000000000000000000000000000	West	Southwest	2002	#0C2340	#C8102E	new-orleans-pelicans-logo
8	2020-11-03 19:17:28.724	2020-11-03 19:17:28.724	1610612743	Nuggets	nuggets	Denver	DEN	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526601/nba-logos/denver-nuggets-logo.png	46	27	0.630000000000000000000000000000	West	Northwest	1976	#0E2240	#FEC524	denver-nuggets-logo
12	2020-11-03 19:17:36.466	2020-11-03 19:17:36.466	1610612754	Pacers	pacers	Indiana	IND	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526602/nba-logos/indiana-pacers-logo.png	45	28	0.616000000000000000000000000000	East	Central	1976	#002D62	#FDBB30	indiana-pacers-logo
4	2020-11-03 19:17:19.596	2020-11-03 19:17:19.597	1610612766	Hornets	hornets	Charlotte	CHA	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526601/nba-logos/charlotte-hornets-logo.png	23	42	0.354000000000000000000000000000	East	Southeast	1988	#1D1160	#00788C	charlotte-hornets-logo
9	2020-11-03 19:17:30.578	2020-11-03 19:17:30.579	1610612765	Pistons	pistons	Detroit	DET	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526601/nba-logos/detroit-pistons-logo.png	20	46	0.303000000000000000000000000000	East	Central	1948	#C8102E	#1D42BA	detroit-pistons-logo
10	2020-11-03 19:17:32.679	2020-11-03 19:17:32.68	1610612744	Warriors	warriors	Golden State	GSW	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526601/nba-logos/golden-state-warriors-logo.png	15	50	0.231000000000000000000000000000	West	Pacific	1946	#1D428A	#FFC72C	golden-state-warriors-logo
5	2020-11-03 19:17:21.802	2020-11-03 19:17:21.803	1610612741	Bulls	bulls	Chicago	CHI	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526601/nba-logos/chicago-bulls-logo.png	22	43	0.338000000000000000000000000000	East	Central	1966	#CE1141	#000000	chicago-bulls-logo
1	2020-11-03 19:17:13.431	2020-11-03 19:17:13.431	1610612737	Hawks	hawks	Atlanta	ATL	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526601/nba-logos/atlanta-hawks-logo.png	20	47	0.299000000000000000000000000000	East	Southeast	1949	#E03A3E	#C1D32F	atlanta-hawks-logo
3	2020-11-03 19:17:17.435	2020-11-03 19:17:17.435	1610612751	Nets	nets	Brooklyn	BKN	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526601/nba-logos/brooklyn-nets-logo.png	35	37	0.486000000000000000000000000000	East	Atlantic	1976	#000000	#FFFFFF	brooklyn-nets-logo
18	2020-11-03 19:17:49.664	2020-11-03 19:17:49.665	1610612750	Timberwolves	timberwolves	Minnesota	MIN	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526604/nba-logos/minnesota-timberwolves-logo.png	19	45	0.297000000000000000000000000000	West	Northwest	1989	#0C2340	#236192	minnesota-timberwolves-logo
6	2020-11-03 19:17:25.179	2020-11-03 19:17:25.18	1610612739	Cavaliers	cavaliers	Cleveland	CLE	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526601/nba-logos/cleveland-cavaliers-logo.png	19	46	0.292000000000000000000000000000	East	Central	1970	#860038	#041E42	cleveland-cavaliers-logo
2	2020-11-03 19:17:15.319	2020-11-03 19:17:15.32	1610612738	Celtics	celtics	Boston	BOS	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526601/nba-logos/boston-celtics-logo.png	48	24	0.667000000000000000000000000000	East	Atlantic	1946	#007A33	#BA9653	boston-celtics-logo
25	2020-11-03 19:18:03.113	2020-11-03 19:18:03.114	1610612757	Trail Blazers	blazers	Portland	POR	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526604/nba-logos/portland-trail-blazers-logo.png	35	39	0.473000000000000000000000000000	West	Northwest	1970	#E03A3E	#000000	portland-trail-blazers-logo
17	2020-11-03 19:17:45.363	2020-11-03 19:17:45.364	1610612749	Bucks	bucks	Milwaukee	MIL	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526602/nba-logos/milwaukee-bucks-logo.png	56	17	0.767000000000000000000000000000	East	Central	1968	#00471B	#EEE1C6	milwaukee-bucks-logo
14	2020-11-03 19:17:40.362	2020-11-03 19:17:40.362	1610612747	Lakers	lakers	Los Angeles	LAL	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526602/nba-logos/los-angeles-lakers-logo.png	52	19	0.732000000000000000000000000000	West	Pacific	1948	#552583	#FDB927	los-angeles-lakers-logo
22	2020-11-03 19:17:57.257	2020-11-03 19:17:57.258	1610612753	Magic	magic	Orlando	ORL	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526603/nba-logos/orlando-magic-logo.png	33	40	0.452000000000000000000000000000	East	Southeast	1989	#0077C0	#C4CED4	orlando-magic-logo
11	2020-11-03 19:17:34.739	2020-11-03 19:17:34.739	1610612745	Rockets	rockets	Houston	HOU	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526602/nba-logos/houston-rockets-logo.png	44	28	0.611000000000000000000000000000	West	Southwest	1967	#CE1141	#000000	houston-rockets-logo
28	2020-11-03 19:18:07.8	2020-11-03 19:18:07.801	1610612761	Raptors	raptors	Toronto	TOR	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526604/nba-logos/toronto-raptors-logo.png	53	19	0.736000000000000000000000000000	East	Atlantic	1995	#CE1141	#000000	toronto-raptors-logo
23	2020-11-03 19:17:59.664	2020-11-03 19:17:59.665	1610612755	76ers	sixers	Philadelphia	PHI	https://res.cloudinary.com/dbc3x3s7c/image/upload/v1611526603/nba-logos/philadelphia-76ers-logo.png	43	30	0.589000000000000000000000000000	East	Atlantic	1949	#006BB6	#D50032	philadelphia-76ers-logo
\.


--
-- Name: Coach_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tundera
--

SELECT pg_catalog.setval('public."Coach_id_seq"', 231, true);


--
-- Name: ColorScheme_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tundera
--

SELECT pg_catalog.setval('public."ColorScheme_id_seq"', 33, true);


--
-- Name: Player_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tundera
--

SELECT pg_catalog.setval('public."Player_id_seq"', 510, true);


--
-- Name: Team_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tundera
--

SELECT pg_catalog.setval('public."Team_id_seq"', 31, true);


--
-- Name: Coach Coach_pkey; Type: CONSTRAINT; Schema: public; Owner: tundera
--

ALTER TABLE ONLY public."Coach"
    ADD CONSTRAINT "Coach_pkey" PRIMARY KEY (id);


--
-- Name: ColorScheme ColorScheme_pkey; Type: CONSTRAINT; Schema: public; Owner: tundera
--

ALTER TABLE ONLY public."ColorScheme"
    ADD CONSTRAINT "ColorScheme_pkey" PRIMARY KEY (id);


--
-- Name: Player Player_pkey; Type: CONSTRAINT; Schema: public; Owner: tundera
--

ALTER TABLE ONLY public."Player"
    ADD CONSTRAINT "Player_pkey" PRIMARY KEY (id);


--
-- Name: Team Team_pkey; Type: CONSTRAINT; Schema: public; Owner: tundera
--

ALTER TABLE ONLY public."Team"
    ADD CONSTRAINT "Team_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: tundera
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Coach.handle_unique; Type: INDEX; Schema: public; Owner: tundera
--

CREATE UNIQUE INDEX "Coach.handle_unique" ON public."Coach" USING btree (handle);


--
-- Name: Coach.name_unique; Type: INDEX; Schema: public; Owner: tundera
--

CREATE UNIQUE INDEX "Coach.name_unique" ON public."Coach" USING btree (name);


--
-- Name: Player.handle_unique; Type: INDEX; Schema: public; Owner: tundera
--

CREATE UNIQUE INDEX "Player.handle_unique" ON public."Player" USING btree (handle);


--
-- Name: Player.name_unique; Type: INDEX; Schema: public; Owner: tundera
--

CREATE UNIQUE INDEX "Player.name_unique" ON public."Player" USING btree (name);


--
-- Name: Player.slug_unique; Type: INDEX; Schema: public; Owner: tundera
--

CREATE UNIQUE INDEX "Player.slug_unique" ON public."Player" USING btree (slug);


--
-- Name: Team.abbreviation_unique; Type: INDEX; Schema: public; Owner: tundera
--

CREATE UNIQUE INDEX "Team.abbreviation_unique" ON public."Team" USING btree (abbreviation);


--
-- Name: Team.handle_unique; Type: INDEX; Schema: public; Owner: tundera
--

CREATE UNIQUE INDEX "Team.handle_unique" ON public."Team" USING btree (handle);


--
-- Name: Team.logoSlug_unique; Type: INDEX; Schema: public; Owner: tundera
--

CREATE UNIQUE INDEX "Team.logoSlug_unique" ON public."Team" USING btree ("logoSlug");


--
-- Name: Team.logo_unique; Type: INDEX; Schema: public; Owner: tundera
--

CREATE UNIQUE INDEX "Team.logo_unique" ON public."Team" USING btree (logo);


--
-- Name: Team.name_unique; Type: INDEX; Schema: public; Owner: tundera
--

CREATE UNIQUE INDEX "Team.name_unique" ON public."Team" USING btree (name);


--
-- Name: Team.slug_unique; Type: INDEX; Schema: public; Owner: tundera
--

CREATE UNIQUE INDEX "Team.slug_unique" ON public."Team" USING btree (slug);


--
-- Name: Coach Coach_teamId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tundera
--

ALTER TABLE ONLY public."Coach"
    ADD CONSTRAINT "Coach_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES public."Team"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ColorScheme ColorScheme_teamId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tundera
--

ALTER TABLE ONLY public."ColorScheme"
    ADD CONSTRAINT "ColorScheme_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES public."Team"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Player Player_teamId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tundera
--

ALTER TABLE ONLY public."Player"
    ADD CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES public."Team"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

