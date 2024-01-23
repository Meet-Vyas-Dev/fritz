import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import makeStyles from "@mui/styles/makeStyles";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

import Button from "./Button";
import clsx from "clsx";
import dayjs from "dayjs";

const useStyles = makeStyles((theme) => ({
  bibcard: {
    marginTop: "5rem",
    "& .MuiTypography-body1": {
      margin: 0,
    },
  },
  bibtex: {
    marginTop: "2rem",
    marginBottom: 0,
    color: theme.palette.secondary.dark,
  },
  hidden: {
    display: "none",
  },
  gitlogPaper: {
    maxHeight: "30rem",
    overflow: "auto",
  },
  gitlogList: {
    fontFamily: "monospace",
  },
  gitlogName: {
    paddingRight: "0.25rem",
  },
  gitlogSHA: {
    color: `${theme.palette.error.main} !important`,
  },
  gitlogPR: {
    color: theme.palette.secondary.dark,
  },
}));

const BibLink = ({ bibtex, children }) => {
  const classes = useStyles();
  const [folded, setFolded] = useState(true);

  return (
    <Card className={classes.bibcard} variant="outlined">
      <CardContent>
        <Typography>{children}</Typography>
        <pre
          className={clsx(classes.bibtex, {
            [classes.hidden]: folded,
          })}
        >
          {bibtex}
        </pre>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => setFolded(!folded)}>
          {folded ? "Show BiBTeX" : "Hide BiBTeX"}
        </Button>
      </CardActions>
    </Card>
  );
};
BibLink.propTypes = {
  bibtex: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};


const AboutPlugins = () => {
    const classes = useStyles();
    const version = useSelector((state) => state.sysInfo.version);
    const gitlog = useSelector((state) => state.sysInfo.gitlog);

    return (
     <div>
      <Typography className={classes.header} variant="h5">
        This is Fritz&nbsp;
        <code>v{version}</code>.
      </Typography>
      <Typography variant="body1">
        Fritz is an open source codebase that serves as a dynamic collaborative
        platform for time-domain astronomy. It is being jointly developed at
        Caltech, UC Berkeley, the University of Minnesota, and the Observatoire de la Côte d'Azur.
      </Typography>
      <Paper variant="outlined" className={classes.documentation}>
        <Typography variant="body1">
          Documentation for Fritz is available at{" "}
          <a href="https://docs.fritz.science/">https://docs.fritz.science/</a>.
        </Typography>
      </Paper>
      <Typography variant="body1">
        Fritz integrates and extends two projects,&nbsp;
        <a href="https://github.com/skyportal/kowalski">Kowalski</a>
        &nbsp;&&nbsp;
        <a href="https://skyportal.io">SkyPortal</a>, and has the functionality
        of an alert broker, a multi-survey data sink/archive, a marshal, and a
        target and observation/follow-up management tool.
      </Typography>
      <Typography variant="body1">
        You may also interact with Fritz through its API. Generate a token from
        your&nbsp;
        <Link to="/profile">profile</Link>&nbsp;page, then refer to the&nbsp;
        <a href="https://docs.fritz.science/api.html">API documentation</a>.
      </Typography>
      <Typography variant="body1">
        Please file issues on our GitHub page at&nbsp;
        <a href="https://github.com/fritz-marshal/fritz">
          https://github.com/fritz-marshal/fritz
        </a>
      </Typography>
      <div>
        If you found Fritz useful, please cite the following papers:
        <BibLink
          bibtex={`@article{Coughlin_2023,
  doi = {10.3847/1538-4365/acdee1},
  url = {https://dx.doi.org/10.3847/1538-4365/acdee1},
  year = {2023},
  month = {jul},
  publisher = {The American Astronomical Society},
  volume = {267},
  number = {2},
  pages = {31},
  author = {Michael W. Coughlin and Joshua S. Bloom and Guy Nir and Sarah Antier and Theophile Jegou du Laz and Stéfan van der Walt and Arien Crellin-Quick and Thomas Culino and Dmitry A. Duev and Daniel A. Goldstein and Brian F. Healy and Viraj Karambelkar and Jada Lilleboe and Kyung Min Shin and Leo P. Singer and Tomás Ahumada and Shreya Anand and Eric C. Bellm and Richard Dekany and Matthew J. Graham and Mansi M. Kasliwal and Ivona Kostadinova and R. Weizmann Kiendrebeogo and Shrinivas R. Kulkarni and Sydney Jenkins and Natalie LeBaron and Ashish A. Mahabal and James D. Neill and B. Parazin and Julien Peloton and Daniel A. Perley and Reed Riddle and Ben Rusholme and Jakob van Santen and Jesper Sollerman and Robert Stein and D. Turpin and Avery Wold and Carla Amat and Adrien Bonnefon and Adrien Bonnefoy and Manon Flament and Frank Kerkow and Sulekha Kishore and Shloke Jani and Stephen K. Mahanty and Céline Liu and Laura Llinares and Jolyane Makarison and Alix Olliéric and Inès Perez and Lydie Pont and Vyom Sharma},
  title = {A Data Science Platform to Enable Time-domain Astronomy},
  journal = {The Astrophysical Journal Supplement Series},
  abstract = {SkyPortal is an open-source software package designed to discover interesting transients efficiently, manage follow-up, perform characterization, and visualize the results. By enabling fast access to archival and catalog data, crossmatching heterogeneous data streams, and the triggering and monitoring of on-demand observations for further characterization, a SkyPortal-based platform has been operating at scale for &gt;2 yr for the Zwicky Transient Facility Phase II community, with hundreds of users, containing tens of millions of time-domain sources, interacting with dozens of telescopes, and enabling community reporting. While SkyPortal emphasizes rich user experiences across common front-end workflows, recognizing that scientific inquiry is increasingly performed programmatically, SkyPortal also surfaces an extensive and well-documented application programming interface system. From back-end and front-end software to data science analysis tools and visualization frameworks, the SkyPortal design emphasizes the reuse and leveraging of best-in-class approaches, with a strong extensibility ethos. For instance, SkyPortal now leverages ChatGPT large language models to generate and surface source-level human-readable summaries automatically. With the imminent restart of the next generation of gravitational-wave detectors, SkyPortal now also includes dedicated multimessenger features addressing the requirements of rapid multimessenger follow-up: multitelescope management, team/group organizing interfaces, and crossmatching of multimessenger data streams with time-domain optical surveys, with interfaces sufficiently intuitive for newcomers to the field. This paper focuses on the detailed implementations, capabilities, and early science results that establish SkyPortal as a community software package ready to take on the data science challenges and opportunities presented by this next chapter in the multimessenger era.}
}`}
        >
          Coughlin, Michael W., et al.,{" "}
          <em>A Data Science Platform to Enable Time-domain Astronomy.</em>{" "}
          Publications of the Astrophysical Journal Supplement Series, 267, 2, Jul 2023.{" "}
          <a href="https://doi.org/10.3847/1538-4365/acdee1">
            https://doi.org/10.3847/1538-4365/acdee1
          </a>
          .
        </BibLink>
        <BibLink
          bibtex={`@article{skyportal2019,
  author = {St\\'efan J. van der Walt and Arien Crellin-Quick and Joshua S. Bloom},
  title = {{SkyPortal}: An Astronomical Data Platform},
  journal = {Journal of Open Source Software},
  volume = {4},
  number = {37},
  page = {1247},
  year = {2019},
  month = {may},
  doi = {10.21105/joss.01247},
  url = {http://joss.theoj.org/papers/10.21105/joss.01247}
}`}
        >
          Stéfan J. van der Walt, Arien Crellin-Quick, Joshua S. Bloom,{" "}
          <em>SkyPortal: An Astronomical Data Platform.</em> Journal of Open
          Source Software, 4(37) 1247, May 2019.{" "}
          <a href="https://doi.org/10.21105/joss.01247">
            https://doi.org/10.21105/joss.01247
          </a>
          .
        </BibLink>
        <BibLink
          bibtex={`@article{duev2019real,
  title={Real-bogus classification for the Zwicky Transient Facility using deep learning},
  author={Duev, Dmitry A and Mahabal, Ashish and Masci, Frank J and Graham, Matthew J and Rusholme, Ben and Walters, Richard and Karmarkar, Ishani and Frederick, Sara and Kasliwal, Mansi M and Rebbapragada, Umaa and others},
  journal={Monthly Notices of the Royal Astronomical Society},
  volume={489},
  number={3},
  pages={3582--3590},
  year={2019},
  publisher={Oxford University Press}
  url={https://ui.adsabs.harvard.edu/abs/2019MNRAS.489.3582D/abstract}
}`}
        >
          Duev, Dmitry A., et al.,{" "}
          <em>
            Real-bogus classification for the Zwicky Transient Facility using
            deep learning.
          </em>{" "}
          Monthly Notices of the Royal Astronomical Society, 489(3) 3582-3590,
          2019.{" "}
          <a href="https://doi.org/10.1093/mnras/stz2357">
            https://doi.org/10.1093/mnras/stz2357
          </a>
          .
        </BibLink>
        <BibLink
          bibtex={`@article{Kasliwal_2019,
    doi = {10.1088/1538-3873/aafbc2},
    url = {https://doi.org/10.1088%2F1538-3873%2Faafbc2},
    year = 2019,
    month = {feb},
    publisher = {{IOP} Publishing},
    volume = {131},
    number = {997},
    pages = {038003},
    author = {M. M. Kasliwal and C. Cannella and A. Bagdasaryan and T. Hung and U. Feindt and L. P. Singer and M. Coughlin and C. Fremling and R. Walters and D. Duev and R. Itoh and R. M. Quimby},
    title = {The {GROWTH} Marshal: A Dynamic Science Portal for Time-domain Astronomy},
    journal = {Publications of the Astronomical Society of the Pacific},
}`}
        >
          Kasliwal, M., et al.,{" "}
          <em>
            The GROWTH marshal: a dynamic science portal for time-domain
            astronomy.
          </em>{" "}
          Publications of the Astronomical Society of the Pacific, 131(997)
          038003, Feb 2019.{" "}
          <a href="https://doi.org/10.1088%2F1538-3873%2Faafbc2">
            https://doi.org/10.1088%2F1538-3873%2Faafbc2
          </a>
          .
        </BibLink>
        If you found Fritz's ACAI machine learning classifiers useful, please cite the following paper:
      </div>
      <div>
        <BibLink
          bibtex={`@ARTICLE{2021arXiv211112142D,
       author = {{Duev}, Dmitry A. and {van der Walt}, St{\\'e}fan J.},
        title = "{Phenomenological classification of the Zwicky Transient Facility astronomical event alerts}",
      journal = {arXiv e-prints},
     keywords = {Astrophysics - Instrumentation and Methods for Astrophysics},
         year = 2021,
        month = nov,
          eid = {arXiv:2111.12142},
        pages = {arXiv:2111.12142},
archivePrefix = {arXiv},
       eprint = {2111.12142},
 primaryClass = {astro-ph.IM},
       adsurl = {https://ui.adsabs.harvard.edu/abs/2021arXiv211112142D},
      adsnote = {Provided by the SAO/NASA Astrophysics Data System}
}`}
        >
          Dmitry A. Duev & Stéfan J. van der Walt,{" "}
          <em>
            Phenomenological classification of the
            Zwicky Transient Facility astronomical event alerts.{" "}
          </em>
          <a href="https://arxiv.org/abs/2111.12142">
            arXiv:2111.12142
          </a>
          .
        </BibLink>
      </div>
      <Typography variant="body1">
        Fritz development is funded by the Moore Foundation, Heising Simons
        Foundation, National Science Foundation, NASA and the Packard
        Foundation.
      </Typography>
      {gitlog && (
        <>
          <Typography variant="h5">Recent Changelog</Typography>
          <Paper mt={1} className={classes.gitlogPaper}>
            <Box p={1}>
              <div>
                See all pull requests for{" "}
                <a href="https://github.com/fritz-marshal/fritz/pulls">
                  Fritz
                </a>, {" "}
                <a href="https://github.com/skyportal/skyportal/pulls">
                  SkyPortal
                </a>, and{" "}
                <a href="https://github.com/skyportal/kowalski/pulls">
                  Kowalski
                </a>
              </div>
              <ul className={classes.gitlogList}>
                {gitlog.map(
                  ({
                    name,
                    time,
                    sha,
                    description,
                    pr_nr,
                    pr_url,
                    commit_url,
                  }) => (
                    <li key={sha}>
                      {name && (
                        <span className={classes.gitlogName}>[{name}]</span>
                      )}
                      [{dayjs(time).format("YYYY-MM-DD")}
                      <a className={classes.gitlogSHA} href={commit_url}>
                        &nbsp;{sha}
                      </a>
                      ] {description}
                      {pr_nr && (
                        <a href={pr_url}>
                          &nbsp;(
                          <span className={classes.gitlogPR}>#{pr_nr}</span>)
                        </a>
                      )}
                    </li>
                  )
                )}
              </ul>
            </Box>
          </Paper>
        </>
      )}
     </div>
    )

};

export default AboutPlugins;
