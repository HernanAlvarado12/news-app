import { createElement } from "react"

const comments = [
    {
        title: `Hydrogen VS Electric Cars`,
        text: `Will hydrogen-fueled cars ever catch up to EVs?`
    },
    {
        title: `The Downsides of AI Artistry`,
        text: `What are the possible adverse effects of on-demand AI image generation?`
    },
    {
        title: `Is VC Funding Drying Up?`,
        text: `Private funding by VC firms is down 50% YOY. We take a look at what that means.`
    }
]

const options = [
    {
        image: './src/assets/pcs.jpg',
        alt: 'pcs image',
        title: `Reviving Retro PCs`,
        text: `What happens when old PCs are given modern upgrades?`
    },
    {
        image: '../assets/laptops.jpg',
        alt: 'laptops image',
        title: `Top 10 Laptops of 2022`,
        text: `Our best picks for various needs and budgets.`
    },
    {
        image: './assets/gaming.jpg',
        alt: 'console gaming',
        title: `The Growth of Gaming`,
        text: `How the pandemic has sparked fresh opportunities.`
    }
]


export { comments, options }