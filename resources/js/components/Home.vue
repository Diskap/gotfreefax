<template>
    <body>
    <Header/>
    <div class="container">
        <div class="row justify-content-between m-3  ">
            <div class="col bg-white rounded-3 shadow">
                <div class="row  p-3 ">
                    <div class="row-cols-auto">
                        <form name="Sender" aria-label="Sender">
                            <h3 class="containerHeading">Sender</h3>
                            <label for="sender-name"> Name</label>
                            <input class="form-control" type="text" id="sender-name" v-model="Sender.name">
                            <label for="sender-company">Company</label>
                            <input class="form-control" type="text" id="sender-company"
                                   v-model="Sender.company">
                            <label for="sender-fax">Fax</label>
                            <input class="form-control" type="text" id="sender-fax" v-model="Sender.fax">
                            <label for="sender-email">Email</label>
                            <input class="form-control" type="text" id="sender-email" v-model="Sender.email">
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-1"></div>
            <div class="col bg-white shadow rounded-3">
                <div class="row p-3">
                    <div class="row-cols-auto">
                        <form name="Receiver" aria-label="Receiver">
                            <h3 class="containerHeading">Receiver</h3>
                            <label for="Receiver-name"> Name</label>
                            <input class="form-control" type="text" id="Receiver-name" v-model="Receiver.name">
                            <label for="Receiver-company">Company</label>
                            <input class="form-control" type="text" id="Receiver-company"
                                   v-model="Receiver.company">
                            <label for="Receiver-fax">Fax</label>
                            <input class="form-control" type="text" id="Receiver-fax" v-model="Receiver.fax">
                            <label for="Receiver-subject">Email</label>
                            <input class="form-control" type="text" id="Receiver-subject"
                                   v-model="Receiver.subject">

                        </form>
                    </div>
                </div>
            </div>

        </div>
        <div class="row justify-content-between m-3 bg-white shadow rounded-3">
            <h3 class="containerHeading pt-1">Content</h3>
            <div class="col d-flex ">
                <div class="col  py-3">
                    <quill-editor
                        v-model="content"
                        ref="myQuillEditor"
                        :options="editorOption"
                        @blur=""
                        @focus=""
                        @change="">
                    </quill-editor>
                </div>
                <div class="col-1"></div>
                <div class="col py-3  align-content-start align-items-start">
                    <input class="pb-2" type="file"/>
                    <input class="pb-2" type="file"/>
                    <input class="pb-2" type="file"/>
                    <input class="pb-2" v-show="Show" type="file"/>
                    <input class="pb-2" v-show="Show" type="file"/>
                    <input class="pb-2" v-show="Show" type="file"/>
                    <input class="pb-2" v-show="Show" type="file"/>
                    <input class="pb-2" v-show="Show" type="file"/>
                    <input class="pb-2" v-show="Show" type="file"/>
                    <input class="pb-2" v-show="Show" type="file"/>
                    <input class="pb-2" v-show="Show" type="file"/>
                    <div>
                        <button class="btn btn-secondary" @click="Show = true" v-show="!Show">Show More</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-between m-3  ">
            <div class="col-4 bg-white shadow rounded-3">
                <h4 class="accordion-header pt-1">Free Fax Service</h4>
                <ul>
                    <li>Truly FREE!</li>
                    <li>Free fax cover page, <b>No Ads</b></li>
                    <li>3 pages per fax maximum</li>
                    <li>2 free faxes per day maximum</li>
                </ul>
                <div class="d-flex justify-content-center pb-3">
                    <button class="btn btn-success">Send Free Fax Now!</button>
                </div>
            </div>
            <div class="col-7 bg-white shadow rounded-3">
                <h4 class="accordion-header pt-1">Premium Pay-Per-Fax Service</h4>
                <div>
                    <ul class="premium">
                        <li><b>Fax 1 document</b> up to 30 pages</li>
                        <li>Priority delivery</li>
                        <li>Free fax cover page, No Ads</li>
                        <li>Secure payment via PayPal</li>
                        <li>Encrypted connection</li>
                        <li>Technical support</li>
                    </ul>
                </div>
                <div class="d-flex justify-content-between px-5 pb-2">
                    <button class="btn btn-danger">gsgsdfsd</button>
                    <button class="btn btn-danger">gsgsdfsd</button>
                    <button class="btn btn-danger">gsgsdfsd</button>
                </div>
            </div>
        </div>
        <div class="row justify-content-between m-3 ">
            <div class="col-12 bg-white shadow rounded-3">
                <h4 class="accordion-header pt-1">Premium/Business Prepaid Fax Service</h4>
                <div class="row justify-content-between pb-2">
                    <div class="col-6">
                        <ul class="premium">
                            <li>Page credits <b>Never Expire</b></li>
                            <li>No monthly fee</li>
                            <li><b>Bill by page</b></li>
                            <li>Free fax cover page, No Ads</li>
                            <li>Secure payment via PayPal</li>
                            <li><b>Fax image download</b></li>
                            <li>Encrypted connection</li>
                            <li>Fax Broadcasting</li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <div class="bg-secondary p-1  rounded-3">
                            <span>
                                <h5 class="d-inline">Prepaid Account</h5>
                                [
                                <a class="d-inline" href="/">My Account</a>
                                |
                                <a class="d-inline" href="/">Retrieve PIN</a>
                                ]
                            </span>
                            <div>
                                <input class="d-inline" type="text" placeholder="Account # or Email">
                                <input class="d-inline" type="text" placeholder="PIN">
                                <button class="d-block btn btn-success mt-1">Send Fax Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between px-5 pb-2">
                        <button class="btn btn-secondary">Buy 100 page credit for $9.95</button>
                        <button class="btn btn-secondary">Buy 300 page credit for $19.95</button>
                        <button class="btn btn-secondary">Buy 1000 page credit for $49.95</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-between m-3 p-2 bg-white shadow rounded-3">
            <h4 class="accordion-header">Incoming Fax Service</h4>
            <span>
                    If you need an INCOMING fax number to RECEIVE fax in email or online, we recommend:
                </span>
            <div class="row rounded-3">
                <div class="col-6 text-center pt-1">
                    <h4 class="fw-bolder">
                        RingCentral Fax
                    </h4>
                    <a href="https://www.ringcentral.com/aff/fax-c.html#feature-fax" target="_blank">Start faxing in 5
                        mins. 30 Day Free Trial</a>
                    <div class="d-block align-self-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold"
                             class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold"
                             class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold"
                             class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold"
                             class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold"
                             class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                    </div>

                </div>
                <div class="col-6 text-center pt-1">
                    <h4 class="fw-bolder">
                        FaxAge Internet Fax
                    </h4>
                    <a href="https://www.faxage.com/?ref=vannet&offer=ac5" target="_blank">Value-leading Price and
                        Performance</a>
                    <div class="d-block align-self-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold"
                             class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold"
                             class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold"
                             class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold"
                             class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold"
                             class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </body>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";


import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import {quillEditor} from 'vue-quill-editor'

export default {
    components: {
        Header,
        Footer,
        quillEditor
    },
    data() {
        return {
            Show: false,
            Sender: {
                name: '',
                company: '',
                fax: '',
                email: ''
            },
            Receiver: {
                name: '',
                company: '',
                fax: '',
                subject: ''
            },
            content: '',
            editorOption: {
                modules: {
                    toolbar: {
                        container: [
                            ['bold', 'italic', 'underline', 'strike'],
                            [{'size': ['small', false, 'large', 'huge']}],
                            [{'color': []}, {'background': []}],
                            [{'font': []}],
                            [{'align': []}],
                        ],
                    }
                },
            },
        }
    },
    methods: {}
}
</script>
