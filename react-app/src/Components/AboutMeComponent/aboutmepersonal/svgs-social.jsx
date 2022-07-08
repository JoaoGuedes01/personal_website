import React from 'react'

const svgsSocial = (props) => {
    return (
        <>
            {props.name == "linkedin" &&
                <svg width="76" height="78" viewBox="0 0 76 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64.7031 8.53125H10.7969C9.50049 8.53125 8.45312 9.62051 8.45312 10.9688V67.0312C8.45312 68.3795 9.50049 69.4688 10.7969 69.4688H64.7031C65.9995 69.4688 67.0469 68.3795 67.0469 67.0312V10.9688C67.0469 9.62051 65.9995 8.53125 64.7031 8.53125ZM25.8335 60.4576H17.1396V31.3752H25.8335V60.4576ZM21.4902 27.399C20.4936 27.399 19.5194 27.0917 18.6907 26.5158C17.862 25.94 17.2161 25.1215 16.8347 24.1639C16.4534 23.2063 16.3536 22.1526 16.548 21.136C16.7424 20.1194 17.2224 19.1856 17.9271 18.4527C18.6318 17.7198 19.5297 17.2207 20.5072 17.0185C21.4846 16.8163 22.4978 16.92 23.4186 17.3167C24.3394 17.7133 25.1264 18.385 25.6801 19.2469C26.2338 20.1087 26.5293 21.1219 26.5293 22.1584C26.522 25.0529 24.2661 27.399 21.4902 27.399ZM58.3823 60.4576H49.6958V46.3125C49.6958 42.9381 49.6372 38.6039 45.1768 38.6039C40.6577 38.6039 39.9619 42.2754 39.9619 46.0687V60.4576H31.2827V31.3752H39.6177V35.3514H39.7349C40.8921 33.0662 43.7266 30.6516 47.96 30.6516C56.7637 30.6516 58.3823 36.6768 58.3823 44.5072V60.4576Z" fill="black" />
                </svg>
            }

            {props.name == "github" &&
                <svg width="76" height="75" viewBox="0 0 76 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38.25 6.25C20.9844 6.25 7 20.2344 7 37.5C6.99646 44.0602 9.0588 50.455 12.8944 55.7771C16.7301 61.0992 22.1442 65.0784 28.3688 67.15C29.9313 67.4219 30.5156 66.4844 30.5156 65.6625C30.5156 64.9219 30.475 62.4625 30.475 59.8438C22.625 61.2906 20.5938 57.9313 19.9688 56.1719C19.6156 55.2719 18.0938 52.5 16.7656 51.7563C15.6719 51.1719 14.1094 49.725 16.725 49.6875C19.1875 49.6469 20.9438 51.9531 21.5313 52.8906C24.3438 57.6156 28.8375 56.2875 30.6313 55.4688C30.9063 53.4375 31.725 52.0719 32.625 51.2906C25.6719 50.5094 18.4063 47.8125 18.4063 35.8594C18.4063 32.4594 19.6156 29.65 21.6094 27.4594C21.2969 26.6781 20.2031 23.475 21.9219 19.1781C21.9219 19.1781 24.5375 18.3594 30.5156 22.3844C33.0596 21.6783 35.688 21.3229 38.3281 21.3281C40.9844 21.3281 43.6406 21.6781 46.1406 22.3813C52.1156 18.3188 54.7344 19.1812 54.7344 19.1812C56.4531 23.4781 55.3594 26.6812 55.0469 27.4625C57.0375 29.65 58.25 32.4219 58.25 35.8594C58.25 47.8531 50.9469 50.5094 43.9938 51.2906C45.125 52.2656 46.1031 54.1406 46.1031 57.0719C46.1031 61.25 46.0625 64.6094 46.0625 65.6656C46.0625 66.4844 46.65 67.4594 48.2125 67.1469C54.4157 65.0525 59.806 61.0656 63.6247 55.7473C67.4434 50.4291 69.4982 44.0472 69.5 37.5C69.5 20.2344 55.5156 6.25 38.25 6.25Z" fill="black" />
                </svg>

            }

            {props.name == "codepen" &&
                <svg width="69" height="68" viewBox="0 0 69 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.25 5.66663L62.5834 24.0833V43.9166L34.25 62.3333L5.91669 43.9166V24.0833L34.25 5.66663Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M34.25 62.3333V43.9166" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M62.5834 24.0834L34.25 43.9167L5.91669 24.0834" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.91669 43.9167L34.25 24.0834L62.5834 43.9167" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M34.25 5.66663V24.0833" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            }

            {props.name == "youtube" &&
                <svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_130_21)">
                        <path d="M35.9731 8.74561H36.3625C39.9588 8.75873 58.1806 8.88998 63.0938 10.2112C64.579 10.6145 65.9325 11.4005 67.0188 12.4906C68.1052 13.5808 68.8864 14.937 69.2844 16.4237C69.7263 18.0862 70.0369 20.2869 70.2469 22.5575L70.2906 23.0125L70.3869 24.15L70.4219 24.605C70.7063 28.6037 70.7413 32.3487 70.7456 33.1669V33.495C70.7413 34.3437 70.7019 38.3425 70.3869 42.5075L70.3519 42.9669L70.3125 43.4219C70.0938 45.9244 69.77 48.4094 69.2844 50.2381C68.8876 51.7254 68.1068 53.0822 67.0203 54.1726C65.9337 55.263 64.5796 56.0486 63.0938 56.4506C58.0188 57.8156 38.7294 57.9119 36.0563 57.9162H35.435C34.0831 57.9162 28.4919 57.89 22.6294 57.6887L21.8856 57.6625L21.505 57.645L20.7569 57.6144L20.0088 57.5837C15.1525 57.3694 10.5281 57.0237 8.3975 56.4462C6.91214 56.0446 5.55841 55.2597 4.47192 54.1701C3.38543 53.0805 2.60433 51.7246 2.20688 50.2381C1.72125 48.4137 1.3975 45.9244 1.17875 43.4219L1.14375 42.9625L1.10875 42.5075C0.892833 39.543 0.773187 36.5722 0.75 33.6L0.75 33.0619C0.75875 32.1212 0.79375 28.8706 1.03 25.2831L1.06063 24.8325L1.07375 24.605L1.10875 24.15L1.205 23.0125L1.24875 22.5575C1.45875 20.2869 1.76938 18.0819 2.21125 16.4237C2.60803 14.9364 3.38884 13.5796 4.47537 12.4892C5.56191 11.3988 6.91599 10.6133 8.40188 10.2112C10.5325 9.64248 15.1569 9.29248 20.0131 9.07373L20.7569 9.04311L21.5094 9.01686L21.8856 9.00373L22.6338 8.97311C26.7975 8.83912 30.9629 8.76474 35.1288 8.74998H35.9731V8.74561ZM28.75 22.7894V43.8681L46.9369 33.3331L28.75 22.7894Z" fill="black" />
                    </g>
                    <defs>
                        <clipPath id="clip0_130_21">
                            <rect width="70" height="70" fill="white" transform="translate(0.75)" />
                        </clipPath>
                    </defs>
                </svg>

            }
        </>
    )
}

export default svgsSocial