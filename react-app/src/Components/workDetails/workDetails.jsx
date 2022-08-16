import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './workDetails.css'
import { motion, AnimatePresence } from 'framer-motion'
import { data } from './data'
import Svgs from './Svgs'
import Icon from './icons'
import { anim } from '../animation'

const WorkDetails = ({ lang, theme }) => {
    const { id } = useParams();
    const [project, setProject] = useState()
    const [index, setIndex] = useState(0)

    useEffect(() => {
        LoadProject(id);
        window.scrollTo(0, 0)
    }, [])

    const LoadProject = async (id) => {
        const proj = data.find((item) => {
            return item.id === id
        });
        setProject(proj);
    }

    const changeSlideUp = () => {
        if (index == (project.img.length - 1)) {
            setIndex(0);
        } else {
            setIndex(index + 1)
        }
    }

    const changeSlideDown = () => {
        if (index == 0) {
            setIndex((project.img.length - 1));
        } else {
            setIndex(index - 1)
        }
    }

    const navanim = {
        scale: 1.1
    }

    const navactive = {
        backgroundColor: "#000"
    }

    const navinactive = {
        backgroundColor: "#fff"
    }

    const transition = {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
    }

    return (
        <>
            {project &&
                <motion.div initial={{ y: "-20%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "20%", opacity: 0 }} transition={{ type: "spring", duration: 0.5 }} className={theme === 'light' ? 'light-color project-container' : 'dark-color project-container'}>
                    <div className="title-container">
                        <h1>{project.title[lang]}</h1>
                    </div>

                    <div className="carousel">
                        <div className="img-car-container">
                            <AnimatePresence initial={false}>
                                <motion.img
                                    key={index}
                                    src={'/personal_website/projects/' + project.img[index] + "?auto=compress"}
                                    initial={{ x: "100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: "-100%", opacity: 0 }}
                                    transition={transition}
                                />
                            </AnimatePresence>
                            <div className="btn-container-car">
                                <a onClick={changeSlideDown}>
                                    <Svgs name="left" theme={theme} />
                                </a>
                                <a onClick={changeSlideUp}>
                                    <Svgs name="right" theme={theme} />
                                </a>
                            </div>
                        </div>
                        <div className="car-nav">
                            {
                                project.img.map((item, i) => (
                                    <motion.a key={item} className="car-nav-item" animate={index == i ? navactive : navinactive} onClick={() => { setIndex(i) }} whileHover={navanim} />
                                ))
                            }
                        </div>
                    </div>

                    <div className="project-info">
                        <div className="proj-header">
                            <div>
                                <h2>{lang == "eng" ? 'Context' : 'Contexto'}</h2>

                                <div className="header-tab">
                                    {project.context.map((item) => (
                                        <div key={item.label[lang]} className="tab-container">
                                            <Icon name={item.icon} theme={theme} />
                                            <div className="label">{item.label[lang]}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2>{lang == "eng" ? 'Technologies Used' : 'Tecnologias Utilizadas'}</h2>
                                <div className="header-tab">
                                    {project.tech.map((item) => (
                                        <div key={item.label} className="tab-container">
                                            <Icon name={item.icon} theme={theme} />
                                            <div className="label">{item.label}</div>
                                        </div>
                                    ))}

                                </div>
                            </div>

                            <div>
                                <h2>{lang == "eng" ? 'My Roles' : 'O meu papel'}</h2>

                                <div className="header-tab">
                                    {project.roles.map((item) => (
                                        <div key={item[lang]}>{item[lang]}</div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2>{lang == "eng" ? 'Duration' : 'Duração'}</h2>
                                <div className="header-tab">
                                    <div> {project.duration.year} </div>
                                    <div> {project.duration.timelen[lang]} </div>
                                </div>
                            </div>

                        </div>

                        <div className="project-description">
                            <h2>{lang == "eng" ? 'Description' : 'Descrição'}</h2>
                            {project.desc.map((item) => (
                                <p key={item[lang]}>{item[lang]}</p>
                            ))}
                        </div>

                        <motion.div
                            className="project-description"
                            initial={anim.appearScroll.initial}
                            whileInView={anim.appearScroll.whileInView}
                            viewport={anim.appearScroll.viewport}>
                            <h2>{lang == "eng" ? 'Challenges' : 'Desafios'}</h2>
                            {project.chall.map((item) => (
                                <p key={item[lang]}>{item[lang]}</p>
                            ))}
                        </motion.div>


                        <motion.div
                            className='rating-container'
                            initial={anim.appearScroll.initial}
                            whileInView={anim.appearScroll.whileInView}
                            viewport={anim.appearScroll.viewport}>
                            <h2>{lang == "eng" ? 'Rating this Project' : 'Avaliação do Projeto'}</h2>
                            <div className="rating">
                                <h1>{project.rate + '/10'}</h1>
                                <p>{project.ratelabel}</p>
                            </div>
                        </motion.div>


                        <motion.div
                            initial={anim.appearScroll.initial}
                            whileInView={anim.appearScroll.whileInView}
                            viewport={anim.appearScroll.viewport}
                            className="aspects-container">
                            <div className="pos-asp">
                                <h2>{lang == "eng" ? 'Positive Aspects' : 'Aspetos Positivos'}</h2>
                                {project.pos.map((item) => (
                                    <p key={item[lang]}>{item[lang]}</p>
                                ))}
                            </div>
                            <div className={theme === 'light' ? 'light-divider' : 'dark-divider'}></div>
                            <div className="neg-asp">
                                <h2>Negative Aspects</h2>
                                {project.neg.map((item) => (
                                    <p key={item[lang]}>{item[lang]}</p>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="btns-container"
                            initial={anim.appearScroll.initial}
                            whileInView={anim.appearScroll.whileInView}
                            viewport={anim.appearScroll.viewport}>
                            <div className='proj-links'>
                                {
                                    project.deploy &&
                                    <a href={project.deploy} className={theme == "light" ? 'main-button-fill light-fill' : 'main-button-fill dark-fill'}>Explore App</a>
                                }
                                {
                                    project.git &&
                                    <a href={project.git} className={theme == "light" ? 'main-button-out light-out' : 'main-button-out dark-out'}>Github</a>
                                }
                            </div>

                            {
                                project.yt &&
                                <a href={project.yt}>
                                    <Icon name="yt" theme={theme} />
                                </a>
                            }
                        </motion.div>
                    </div>

                </motion.div>
            }
        </>
    )
}

export default WorkDetails