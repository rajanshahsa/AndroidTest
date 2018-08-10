webpackJsonp([1],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service_api_service__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationServiceProvider = /** @class */ (function () {
    function NotificationServiceProvider(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        console.log('Hello NotificationServiceProvider Provider');
    }
    NotificationServiceProvider.prototype.registerDevice = function (notificationData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.apiService.post('notification/register-device-token', notificationData).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    NotificationServiceProvider.prototype.getNotifications = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.apiService.getWithHeader('notification/get-notifications').subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    NotificationServiceProvider.prototype.updateNotificationStatus = function (notificationData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.apiService.postWithHeader('notification/change-status', notificationData).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    NotificationServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__api_service_api_service__["a" /* ApiServiceProvider */]])
    ], NotificationServiceProvider);
    return NotificationServiceProvider;
}());

//# sourceMappingURL=notification-service.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsuranceDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_insurance_service_insurance_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_utility_utility__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__insurance_management_insurance_management__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__family_share_family_share__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var InsuranceDetailPage = /** @class */ (function () {
    function InsuranceDetailPage(navCtrl, navParams, insuranceAPIService, auth, actionSheetCtrl, alertCtrl, translate, emailComposer, file, platform, util, currencyPipe, event, callNumber, ref) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.insuranceAPIService = insuranceAPIService;
        this.auth = auth;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.emailComposer = emailComposer;
        this.file = file;
        this.platform = platform;
        this.util = util;
        this.currencyPipe = currencyPipe;
        this.event = event;
        this.callNumber = callNumber;
        this.ref = ref;
        this.isInsuranceProof = false;
        this.backToDetail = false;
        this.backToback = true;
        if (navParams.get('insurance')) {
            this.insurance = JSON.parse(navParams.get('insurance'));
        }
        else {
            this.insurance = { _id: navParams.get('insuranceId') };
        }
        this.loggedUser = JSON.parse(this.auth.getLocalStore('LoggedUser'));
        this.getInsuranceDetail();
    }
    InsuranceDetailPage.prototype.ionViewWillEnter = function () {
        this.event.publish('trackView', 'On Insurance View');
    };
    InsuranceDetailPage.prototype.displayInsuranceProof = function () {
        var _this = this;
        if (this.insuranceDetails['signedUrl']) {
            this.isInsuranceProof = true;
            this.backToDetail = true;
            this.backToback = false;
        }
        else {
            var docKey_1;
            var mainDocKey_1;
            this.insuranceDetails.documents.map(function (res) {
                res.thumbs.map(function (imageDic) {
                    if (imageDic.name == 'policy_detail_thumb') {
                        docKey_1 = imageDic.key;
                    }
                });
                if (docKey_1 == undefined) {
                    docKey_1 = res.key;
                }
                mainDocKey_1 = res.key;
            });
            this.insuranceAPIService.getSignedUrlForImage(docKey_1).then(function (res) {
                _this.insuranceDetails['signedUrl'] = res['data']['preSignedUrl'];
                _this.isInsuranceProof = true;
                _this.backToDetail = true;
                _this.backToback = false;
            }).catch(function (error) {
            });
            this.insuranceAPIService.getSignedUrlForImage(mainDocKey_1).then(function (res) {
                _this.insuranceDetails['mainSignedUrl'] = res['data']['preSignedUrl'];
                _this.isInsuranceProof = true;
                _this.backToDetail = true;
                _this.backToback = false;
            }).catch(function (error) {
            });
        }
    };
    InsuranceDetailPage.prototype.backToInsuranceProof = function () {
        this.isInsuranceProof = false;
        this.backToDetail = false;
        this.backToback = true;
    };
    InsuranceDetailPage.prototype.ionViewDidLoad = function () {
    };
    InsuranceDetailPage.prototype.getInsuranceDetail = function () {
        var _this = this;
        window.localStorage.removeItem('shareFamilyMember');
        this.insuranceAPIService.getInsuranceDetail(this.insurance._id).then(function (res) {
            _this.insuranceDetails = res['data'];
            _this.insurance.isOwner = _this.insuranceDetails.userId === _this.loggedUser.userData._id;
            if (!('isSelfBeneficiary' in _this.insuranceDetails)) {
                _this.insuranceDetails['isSelfBeneficiary'] = false;
            }
        }).catch(function (error) {
            var tmpError = error.error;
            _this.util.showAlertWithAction(tmpError.error, function () { _this.navCtrl.pop(); });
        });
    };
    InsuranceDetailPage.prototype.editInsurance = function () {
        var _this = this;
        var docKey;
        this.insuranceDetails.documents.map(function (res) {
            res.thumbs.map(function (imageDic) {
                if (imageDic.name == 'policy_detail_thumb') {
                    docKey = imageDic.key;
                }
            });
            if (docKey == undefined) {
                docKey = res.key;
            }
        });
        this.insuranceAPIService.getSignedUrlForImage(docKey).then(function (res) {
            _this.insuranceDetails['signedUrl'] = res['data']['preSignedUrl'];
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__insurance_management_insurance_management__["a" /* InsuranceManagementPage */], { editInsurance: JSON.stringify(_this.insuranceDetails) });
        }).catch(function (error) {
        });
    };
    InsuranceDetailPage.prototype.editDetails = function () {
        var _this = this;
        if (this.insuranceDetails) {
            var actionSheetList = [{
                    text: 'INSURANCE_SHARE',
                    handler: function () {
                        _this.shareInsurance();
                    },
                }];
            var removeItem = {
                text: 'REMOVE',
                handler: function () {
                    _this.presentConfirm();
                }
            };
            var editItem = {
                text: 'EDIT',
                role: 'destructive',
                handler: function () {
                    var docKey;
                    _this.insuranceDetails.documents.map(function (res) {
                        res.thumbs.map(function (imageDic) {
                            if (imageDic.name == 'policy_detail_thumb') {
                                docKey = imageDic.key;
                            }
                        });
                        if (docKey == undefined) {
                            docKey = res.key;
                        }
                    });
                    _this.insuranceAPIService.getSignedUrlForImage(docKey).then(function (res) {
                        _this.insuranceDetails['signedUrl'] = res['data']['preSignedUrl'];
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__insurance_management_insurance_management__["a" /* InsuranceManagementPage */], { editInsurance: JSON.stringify(_this.insuranceDetails) });
                    }).catch(function (error) {
                    });
                }
            };
            var cancelItem = {
                text: 'CANCEL',
                role: 'cancel',
                handler: function () {
                },
            };
            if (this.insurance.isOwner) {
                actionSheetList.push(editItem);
                actionSheetList.push(removeItem);
            }
            actionSheetList.push(cancelItem);
            var _loop_1 = function (action) {
                this_1.translate.get(action['text']).subscribe(function (value) {
                    action['text'] = value;
                });
            };
            var this_1 = this;
            for (var _i = 0, actionSheetList_1 = actionSheetList; _i < actionSheetList_1.length; _i++) {
                var action = actionSheetList_1[_i];
                _loop_1(action);
            }
            var actionSheet = this.actionSheetCtrl.create({
                cssClass: 'select-action-sheet',
                buttons: actionSheetList
            });
            actionSheet.present();
        }
    };
    InsuranceDetailPage.prototype.presentConfirm = function () {
        var _this = this;
        var alertList = [{
                text: 'YES',
                handler: function () {
                    var data = {
                        id: _this.insuranceDetails._id
                    };
                    _this.insuranceAPIService.removeInsurance(data).then(function (res) {
                        _this.navCtrl.popToRoot();
                    }).catch(function (error) {
                    });
                }
            }, {
                text: 'NO',
                handler: function () {
                }
            }];
        var _loop_2 = function (alert_1) {
            this_2.translate.get(alert_1['text']).subscribe(function (value) {
                alert_1['text'] = value;
            });
        };
        var this_2 = this;
        for (var _i = 0, alertList_1 = alertList; _i < alertList_1.length; _i++) {
            var alert_1 = alertList_1[_i];
            _loop_2(alert_1);
        }
        var title = 'iBeed Mari';
        this.translate.get('LOGO_NAME').subscribe(function (value) {
            title = value;
        });
        var message = 'Are you sure, you want to remove this insurance?';
        this.translate.get('DELETE_INSURANCE_CONFIRMATION').subscribe(function (value) {
            message = value;
        });
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: alertList
        });
        alert.present();
    };
    InsuranceDetailPage.prototype.shareInsurance = function () {
        var _this = this;
        var translatedKeyList = ['COMPANY', 'PRODUCT', 'POLICY_HOLDER', 'INSURED', 'REGISTER', 'PREMIUM', 'PREMIUMFREQUENCY', 'START_DATE', 'END_DATE'];
        var imageURL;
        this.insuranceDetails.documents.map(function (res) {
            console.log(res);
            res.thumbs.map(function (imageDic) {
                if (imageDic.name == 'email_template_thumb') {
                    imageURL = imageDic.key;
                }
            });
            if (imageURL == undefined) {
                res.thumbs.map(function (imageDic) {
                    if (imageDic.name == 'policy_detail_thumb') {
                        imageURL = imageDic.key;
                    }
                });
            }
            if (imageURL == undefined) {
                imageURL = res.key;
            }
        });
        var translatedList = [];
        for (var _i = 0, translatedKeyList_1 = translatedKeyList; _i < translatedKeyList_1.length; _i++) {
            var str = translatedKeyList_1[_i];
            this.translate.get(str).subscribe(function (value) {
                translatedList.push(value);
            });
        }
        var dates = new Date(this.insuranceDetails.startDate);
        var day = dates.getDate();
        var monthIndex = dates.getMonth();
        var year = dates.getFullYear();
        var tmpStartDate = year + (monthIndex >= 9 ? '/' : '/0') + (monthIndex + 1) + (day > 9 ? '/' : '/0') + day;
        dates = new Date(this.insuranceDetails.endDate);
        day = dates.getDate();
        monthIndex = dates.getMonth();
        year = dates.getFullYear();
        var tmpEndDate = year + (monthIndex >= 9 ? '/' : '/0') + (monthIndex + 1) + (day > 9 ? '/' : '/0') + day;
        this.fileTransfer = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["b" /* FileTransferObject */]();
        this.insuranceAPIService.getSignedUrlForImage(imageURL).then(function (signedURL) {
            var loading = _this.util.getLoader();
            loading.present();
            _this.getPathForInternalDir('').then(function (res) {
                _this.fileTransfer.onProgress(function (e) {
                    if (e) {
                        var progress = (e.lengthComputable) ? Math.round(e.loaded / e.total * 100) : -1;
                        loading.setContent("" + progress + " %");
                        _this.ref.tick();
                    }
                });
                _this.fileTransfer.download(signedURL['data']['preSignedUrl'], "" + res, true).then(function (entry) {
                    var tableRow = (_this.platform.is('android') ? "<br><br>" : "") + "<tr><td>";
                    var registerName = _this.loggedUser.userData.lastName + ' ' + _this.loggedUser.userData.firstName;
                    var companyNameStr = tableRow + translatedList[0] + " : </td><td>" + _this.insuranceDetails.organization.name + "</td></tr>";
                    var productNameStr = tableRow + translatedList[1] + " : </td><td>" + _this.insuranceDetails.insuranceProduct.petName + "</td></tr>";
                    var policyHolderStr = tableRow + translatedList[2] + " : </td><td>" + _this.insuranceDetails.policyHolder + "</td></tr>";
                    var insuredStr = tableRow + translatedList[3] + " : </td><td>" + _this.insuranceDetails.insured + "</td></tr>";
                    var registerStr;
                    if (registerName != ' ') {
                        registerStr = tableRow + translatedList[4] + " : </td><td>" + registerName + "</td></tr>";
                    }
                    var premiumAmtStr = tableRow + translatedList[5] + " : </td><td>" + _this.currencyPipe.transform(_this.insuranceDetails.premiumAmount, ' ') + "</td></tr>";
                    var premiumPaymentStr = tableRow + translatedList[6] + " : </td><td>" + _this.insuranceDetails.premiumPaymentFreq + "</td></tr>";
                    var startDateStr = tableRow + translatedList[7] + " : </td><td>" + tmpStartDate + "</td></tr>";
                    var endDateStr = tableRow + translatedList[8] + " : </td><td>" + tmpEndDate + "</td></tr>";
                    var emailBodyStr = "<html><head><body><table>";
                    emailBodyStr += companyNameStr;
                    emailBodyStr += productNameStr;
                    emailBodyStr += policyHolderStr;
                    emailBodyStr += insuredStr;
                    if (registerStr) {
                        emailBodyStr += registerStr;
                    }
                    emailBodyStr += premiumAmtStr;
                    emailBodyStr += premiumPaymentStr;
                    emailBodyStr += startDateStr;
                    emailBodyStr += endDateStr;
                    emailBodyStr += "</table></body></head></html>";
                    console.log('emailBodyStr', emailBodyStr);
                    _this.emailComposer.isAvailable().then(function (available) {
                        console.log('available', available);
                        var email = {
                            app: _this.platform.is('android') ? 'gmail' : '',
                            to: '',
                            cc: '',
                            bcc: [],
                            attachments: [
                                "" + res
                            ],
                            subject: '共有された保険のお知らせ',
                            body: emailBodyStr,
                            isHtml: true
                        };
                        // Send a text message using default options
                        _this.emailComposer.addAlias('gmail', 'com.google.android.gm');
                        _this.emailComposer.open(email);
                        loading.dismissAll();
                    }).catch(function (error) {
                        _this.util.presentToast("MAIL_ERROR", true);
                        console.log('error', error);
                        loading.dismissAll();
                    });
                }).catch(function (error) {
                    loading.dismissAll();
                    _this.util.presentToast(error.body, false);
                    console.log('Download error source', error.source);
                    console.log('Download error body', error.body);
                });
            }).catch(function (error) {
                loading.dismissAll();
                console.log('FilePath error', error);
            });
        }).catch(function (error) {
        });
    };
    //Get path for episode download.
    InsuranceDetailPage.prototype.getPathForInternalDir = function (feedId) {
        var currentObj = this;
        return new Promise(function (resolve, reject) {
            var Dir = currentObj.file.documentsDirectory;
            if (currentObj.file.externalRootDirectory) {
                Dir = currentObj.file.externalRootDirectory;
            }
            var folderPath = '';
            if (currentObj.platform.is('android')) {
                currentObj.file.resolveLocalFilesystemUrl(Dir).then(function (fileSystem) {
                    currentObj.file.getDirectory(fileSystem, '', { create: true, exclusive: true }).then(function (dirEntry) {
                        currentObj.file.getDirectory(fileSystem, folderPath, { create: true, exclusive: true }).then(function (dirEntry) {
                            currentObj.getFile(dirEntry, feedId).then(function (path) {
                                resolve(path);
                            }).catch(function (err) {
                                console.log('getFileError', err);
                                reject(err);
                            });
                        }).catch(function (err) {
                            currentObj.file.createDir(Dir, folderPath, false).then(function (dirEntry) {
                                currentObj.getFile(dirEntry, feedId).then(function (path) {
                                    resolve(path);
                                }).catch(function (err) {
                                    console.log('getFileError catch', err);
                                    reject(err);
                                });
                            }).catch(function (err) {
                                if (err.code == 12) {
                                    fileSystem.fullPath = fileSystem.fullPath + folderPath;
                                    currentObj.getFile(fileSystem, feedId).then(function (path) {
                                        resolve(path);
                                    }).catch(function (err) {
                                        console.log('getFileError if catch', err);
                                        reject(err);
                                    });
                                }
                                else {
                                    console.log('getFileError else catch', err);
                                    reject(err);
                                }
                            });
                        });
                    }).catch(function (err) {
                        currentObj.file.createDir(Dir, folderPath, false).then(function (dirEntry) {
                            currentObj.getFile(dirEntry, feedId).then(function (path) {
                                resolve(path);
                            }).catch(function (err) {
                                console.log('getFileError catch', err);
                                reject(err);
                            });
                        }).catch(function (err) {
                            if (err.code == 12) {
                                fileSystem.fullPath = fileSystem.fullPath + folderPath;
                                currentObj.getFile(fileSystem, feedId).then(function (path) {
                                    resolve(path);
                                }).catch(function (err) {
                                    console.log('getFileError if catch', err);
                                    reject(err);
                                });
                            }
                            else {
                                console.log('getFileError else catch', err);
                                reject(err);
                            }
                        });
                    });
                }).catch(function (err) {
                    console.log('getDirectory', err);
                    reject(err);
                });
            }
            else {
                currentObj.file.resolveLocalFilesystemUrl(Dir).then(function (fileSystem) {
                    currentObj.file.getDirectory(fileSystem, folderPath, { create: true, exclusive: true }).then(function (dirEntry) {
                        currentObj.getFile(dirEntry, feedId).then(function (path) {
                            resolve(path);
                        }).catch(function (err) {
                            console.log('getFileError', err);
                            reject(err);
                        });
                    }).catch(function (err) {
                        currentObj.file.createDir(Dir, folderPath, false).then(function (dirEntry) {
                            currentObj.getFile(dirEntry, feedId).then(function (path) {
                                resolve(path);
                            }).catch(function (err) {
                                console.log('getFileError catch', err);
                                reject(err);
                            });
                        }).catch(function (err) {
                            if (err.code == 12) {
                                fileSystem.fullPath = fileSystem.fullPath + folderPath;
                                currentObj.getFile(fileSystem, feedId).then(function (path) {
                                    resolve(path);
                                }).catch(function (err) {
                                    console.log('getFileError if catch', err);
                                    reject(err);
                                });
                            }
                            else {
                                console.log('getFileError else catch', err);
                                reject(err);
                            }
                        });
                    });
                }).catch(function (err) {
                    console.log('getDirectory', err);
                    reject(err);
                });
            }
        });
    };
    InsuranceDetailPage.prototype.getFile = function (dirEntry, feedId) {
        var currentObj = this;
        return new Promise(function (resolve, reject) {
            currentObj.file.getFile(dirEntry, "image.png", { create: true, exclusive: false }).then(function (fe) {
                var p = fe.toURL();
                resolve(p);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    InsuranceDetailPage.prototype.callHotLineNo = function () {
        this.callNumber.callNumber(this.insuranceDetails.hotlinePhoneNo, true).then(function (res) {
            console.log('Launched dialer!', res);
        }).catch(function (err) {
            console.log('Error launching dialer', err);
        });
    };
    InsuranceDetailPage.prototype.shareDetails = function () {
        var ids = [];
        var shareFamilyMember = JSON.parse(window.localStorage.getItem('shareFamilyMember'));
        console.log('shareFamilyMember', shareFamilyMember);
        if (shareFamilyMember) {
            ids = shareFamilyMember;
            window.localStorage.removeItem('shareFamilyMember');
        }
        else {
            if (this.insurance.notificationSharedWith && this.insurance.notificationSharedWith.length > 0) {
                ids = this.insurance.notificationSharedWith.map(function (member) { return member._id; });
            }
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__family_share_family_share__["a" /* FamilySharePage */], { id: this.insurance._id, sharedFamilyMemberIds: ids });
    };
    InsuranceDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-insurance-detail',template:/*ion-inline-start:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/insurance-detail/insurance-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title> {{ \'INSURANCE_DETAIL\' | translate }}</ion-title>\n    <ion-buttons end class="dots-head" *ngIf="insurance.isOwner">\n      <button class="edit-screen" ion-button icon-only (click)="shareDetails()">\n        <ion-icon class="editDetailIcon" name="share"></ion-icon>\n      </button>\n      <button class="edit-screen" ion-button icon-only (click)="editDetails()">\n        <ion-icon class="editDetailIcon" name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding id="insurance-details">\n  <div class="upper-section" *ngIf="insuranceDetails">\n    <div class="insurance-info">\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col col-6>\n            <ion-list no-lines>\n              <ion-label>{{ \'COMPANY\' | translate }}</ion-label>\n              <h2>{{insuranceDetails.organization.name}}</h2>\n            </ion-list>\n          </ion-col>\n          <ion-col col-6>\n            <ion-list no-lines>\n              <ion-label>{{ \'PRODUCT\' | translate }}</ion-label>\n              <h2>{{insuranceDetails.insuranceProduct.petName}}</h2>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col col-6>\n            <ion-list no-lines *ngIf="insuranceDetails.policyHolder">\n              <ion-label>{{ \'POLICY_HOLDER\' | translate }}</ion-label>\n              <h2>{{insuranceDetails.policyHolder}}</h2>\n            </ion-list>\n          </ion-col>\n          <ion-col col-6>\n            <ion-list no-lines *ngIf="insuranceDetails.insured">\n              <ion-label>{{ \'INSURED\' | translate }}</ion-label>\n              <h2>{{insuranceDetails.insured}}</h2>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col col-12>\n            <ion-list no-lines>\n              <ion-label>{{ \'REGISTER\' | translate }}</ion-label>\n              <h2>{{insuranceDetails.owner.lastName}} {{insuranceDetails.owner.firstName}}</h2>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col col-6>\n            <ion-list no-lines>\n              <ion-label>{{ \'PREMIUM\' | translate }}</ion-label>\n              <h2>{{insuranceDetails.premiumAmount | currency:\' \':false:\'2.0-0\'}}</h2>\n            </ion-list>\n          </ion-col>\n          <ion-col col-6>\n            <ion-list no-lines>\n              <ion-label>{{ \'PREMIUMFREQUENCY\' | translate }}</ion-label>\n              <h2>{{insuranceDetails.premiumPaymentFreq}}</h2>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <ion-list no-lines>\n              <ion-label>{{ \'MAX_CLAIM_AMOUNT\' | translate }}</ion-label>\n              <h2>{{insuranceDetails.maxClaimAmount | currency:\' \':false:\'2.0-0\'}}</h2>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div class="insurance-date">\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col col-4>\n            <ion-list no-lines>\n              <ion-label>{{ \'START_DATE\' | translate }}</ion-label>\n              <h2>{{insuranceDetails.startDate | date:\'yyyy/MM/dd\'}}</h2>\n            </ion-list>\n          </ion-col>\n          <ion-col col-4>\n            <ion-list no-lines>\n              <ion-label>{{ \'END_DATE\' | translate }}</ion-label>\n              <h2>{{insuranceDetails.endDate | date:\'yyyy/MM/dd\'}}</h2>\n            </ion-list>\n          </ion-col>\n          <ion-col col-4 text-center>\n            <button class="insurance-info-detail-btn" ion-button color="dark" (click)="displayInsuranceProof()" *ngIf="backToback">{{ \'DETAIL\' | translate }}</button>\n            <button class="insurance-info-detail-btn" ion-button color="dark" (click)="backToInsuranceProof()" *ngIf="backToDetail">\n              {{ \'BACK\' | translate }}</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div class="insurance-hot-line-no">\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col col-12>\n            <ion-list no-lines>\n              <ion-label>{{ \'HOT_LINE_NO\' | translate }}</ion-label>\n              <h2 style=" text-decoration: underline;" (click)="callHotLineNo()" *ngIf="insuranceDetails.hotlinePhoneNo">{{insuranceDetails.hotlinePhoneNo}}</h2>\n              <h2 (click)="callHotLineNo()" *ngIf="!insuranceDetails.hotlinePhoneNo">{{\'NO_HOT_LINE\' | translate}}</h2>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n  <div class="bottom-section">\n    <div class="family-listing" *ngIf="!isInsuranceProof && insuranceDetails">\n      <ion-grid no-padding class="persion-info" *ngFor="let benificyer of insuranceDetails.benificiariesMember">\n        <ion-row>\n          <ion-col col-2>\n            <ion-avatar item-start>\n              <img [src]="benificyer.profilePic">\n            </ion-avatar>\n          </ion-col>\n          <ion-col col-10>\n            <div class="right-side-section">\n              <ion-label>{{benificyer.lastName}} {{benificyer.firstName}}</ion-label>\n              <h2>{{benificyer.relationship}}</h2>\n            </div>\n            <div class="toggle">\n              <ion-item>\n                <ion-label> {{ \'ADMINISTRATOR\' | translate }}</ion-label>\n                <ion-toggle color="energized" [checked]="insuranceDetails.administrator == benificyer._id" disabled></ion-toggle>\n              </ion-item>\n              <ion-item>\n                <ion-label> {{ \'BENEFICIARY\' | translate }}</ion-label>\n                <ion-toggle color="energized" [checked]="benificyer.beneficiary" disabled></ion-toggle>\n              </ion-item>\n            </div>\n            <div class="range">\n              <ion-grid no-padding>\n                <ion-row>\n                  <ion-col col-3>\n                    <ion-label no-margin> {{ \'AMOUNT\' | translate }}</ion-label>\n                  </ion-col>\n                  <ion-col col-9>\n                    <ion-item>\n                      <ion-range min="0" [max]="100" pin="true" color="secondary" debounce="500" [(ngModel)]="benificyer.percentageAmount" readonly\n                        disabled></ion-range>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div class="insurance" *ngIf="isInsuranceProof && insuranceDetails">\n      <img [src]="insuranceDetails.signedUrl" [imageViewer]="insuranceDetails.mainSignedUrl">\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/insurance-detail/insurance-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_8__providers_insurance_service_insurance_service__["a" /* InsuranceServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_10__providers_utility_utility__["a" /* UtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CurrencyPipe"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]])
    ], InsuranceDetailPage);
    return InsuranceDetailPage;
}());

//# sourceMappingURL=insurance-detail.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsuranceManagementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_date_picker__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_text_mask_addons_dist_createNumberMask__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_text_mask_addons_dist_createNumberMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_text_mask_addons_dist_createNumberMask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_utility_utility__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_insurance_service_insurance_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_user_service_user_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_service_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__beneficiary_beneficiary__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__share_policy_share_policy__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var InsuranceManagementPage = /** @class */ (function () {
    function InsuranceManagementPage(navCtrl, navParams, camera, platform, actionsheetCtrl, loadingCtrl, formBuilder, utilityService, auth, datepipe, userAPISerivce, translate, datePicker, event, transfer, keyboard, insuranceAPIService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.utilityService = utilityService;
        this.auth = auth;
        this.datepipe = datepipe;
        this.userAPISerivce = userAPISerivce;
        this.translate = translate;
        this.datePicker = datePicker;
        this.event = event;
        this.transfer = transfer;
        this.keyboard = keyboard;
        this.insuranceAPIService = insuranceAPIService;
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
        this.selectedCategory = 1;
        this.categoryList = [{ id: 1, image: "assets/imgs/mini-icon-1.svg", title: "AUTO", name: "Auto" },
            { id: 2, image: "assets/imgs/mini-icon-2.svg", title: "LIFE", name: "Life" },
            { id: 3, image: "assets/imgs/mini-icon-3.svg", title: "HEALTH", name: "Health" },
            { id: 4, image: "assets/imgs/mini-icon-4.svg", title: "PET", name: "Pet" },
            { id: 5, image: "assets/imgs/mini-icon-5.svg", title: "HOME", name: "Home" }];
        this.policyFrequencyList = ['POLICY_FRE_ANNUALY', 'POLICY_FRE_BI_ANNUALY', 'POLICY_FRE_QUARTERLY', 'POLICY_FRE_MONTHLY', 'POLICY_FRE_ONE_TIME'];
        this.companyList = [];
        this.productList = [];
        this.submitted = false;
        this.loadimgProfile = true;
        this.uploadPrevciew = '';
        this.showingPriviews = false;
        this.beneficiaryData = [];
        this.isEditing = false;
        this.isValidDate = true;
        this.dataURItoBlob = function (dataURI) {
            var byteString = atob(dataURI.split(',')[1]);
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            var ab = new ArrayBuffer(byteString.length);
            var ia = new Uint8Array(ab);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            var bb = new Blob([ab], {
                type: mimeString,
            });
            return bb;
        };
        platform.ready().then(function () {
            keyboard.onKeyboardShow().subscribe(function () {
                document.body.classList.add('keyboard-is-open');
                document.body.classList.remove('keyboard-is-close');
            });
            keyboard.onKeyboardHide().subscribe(function () {
                document.body.classList.remove('keyboard-is-open');
                document.body.classList.add('keyboard-is-close');
            });
        });
        var numberMask = __WEBPACK_IMPORTED_MODULE_9_text_mask_addons_dist_createNumberMask___default()({
            prefix: '',
            thousandsSeparatorSymbol: ',',
            allowLeadingZeroes: false
        });
        this.premiumAmtmask = numberMask;
        var hotLineMaskNumber = __WEBPACK_IMPORTED_MODULE_9_text_mask_addons_dist_createNumberMask___default()({
            prefix: '0',
            thousandsSeparatorSymbol: '',
            allowLeadingZeroes: true
        });
        this.hotLineMask = hotLineMaskNumber;
        this.maxClainAmtmask = numberMask;
        this.insurance = this.formBuilder.group({
            company: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            product: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            policyFrequency: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            insured: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            policyHolder: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            policyNumber: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            startDate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            endDate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            premiumAmount: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            maxClaimAmount: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            proof: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            imageURI: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            hotLineNo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            share: ['']
        });
        var _loop_1 = function (category) {
            this_1.translate.get(category.title).subscribe(function (value) {
                category.title = value;
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.categoryList; _i < _a.length; _i++) {
            var category = _a[_i];
            _loop_1(category);
        }
        this.loggedUser = JSON.parse(this.auth.getLocalStore('LoggedUser'));
        this.userAPISerivce.getBeneficiaryFamilyMember().then(function (res) {
            _this.familyMemberList = res['list'];
            _this.beneficiaryData = [];
            _this.familyMemberList.map(function (familyMember) {
                _this.beneficiaryData.push({ familyMemberId: familyMember._id, percentageAmount: (1 / _this.familyMemberList.length) * 100.0, isBeneficiary: true, relationShip: familyMember.relationShip });
            });
        }).catch(function (error) {
            _this.familyMemberList = [];
        });
        var minyear = new Date();
        var pastYear = new Date(minyear.setFullYear(minyear.getFullYear() - 100));
        this.minDate = pastYear.getFullYear();
        minyear = new Date();
        var maxyear = new Date(minyear.setFullYear(minyear.getFullYear() + 100));
        this.maxDate = maxyear.getFullYear();
        if (navParams.get('editInsurance')) {
            setTimeout(function () {
                _this.editInsuranceDetail = JSON.parse(navParams.get('editInsurance'));
                if (_this.editInsuranceDetail) {
                    for (var _i = 0, _a = _this.categoryList; _i < _a.length; _i++) {
                        var category = _a[_i];
                        if (_this.editInsuranceDetail.insuranceProduct.policyType == category.name) {
                            _this.selectedCategory = category.id;
                            break;
                        }
                    }
                    var dates = new Date(_this.editInsuranceDetail.startDate);
                    var day = dates.getDate();
                    var monthIndex = dates.getMonth();
                    var year = dates.getFullYear();
                    var tmpStartDate = year + (monthIndex >= 9 ? '/' : '/0') + (monthIndex + 1) + (day > 9 ? '/' : '/0') + day;
                    dates = new Date(_this.editInsuranceDetail.endDate);
                    day = dates.getDate();
                    monthIndex = dates.getMonth();
                    year = dates.getFullYear();
                    var tmpEndDate = year + (monthIndex >= 9 ? '/' : '/0') + (monthIndex + 1) + (day > 9 ? '/' : '/0') + day;
                    _this.isEditing = true;
                    _this.insurance = _this.formBuilder.group({
                        company: [_this.editInsuranceDetail.organization._id, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                        product: [_this.editInsuranceDetail.insuranceProduct._id, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                        policyFrequency: [_this.editInsuranceDetail.premiumPaymentFreq, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                        policyNumber: [_this.editInsuranceDetail.policyNumber, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                        startDate: [tmpStartDate, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                        endDate: [tmpEndDate, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                        premiumAmount: [_this.editInsuranceDetail.premiumAmount, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                        maxClaimAmount: [_this.editInsuranceDetail.maxClaimAmount, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                        proof: [_this.editInsuranceDetail.signedUrl, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                        imageURI: [_this.editInsuranceDetail.signedUrl, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                        insured: [_this.editInsuranceDetail.insured, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                        policyHolder: [_this.editInsuranceDetail.policyHolder, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                        hotLineNo: [_this.editInsuranceDetail.hotlinePhoneNo ? _this.editInsuranceDetail.hotlinePhoneNo : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                        share: ['']
                    });
                    _this.showingPriviews = true;
                    _this.uploadPrevciew = _this.editInsuranceDetail.signedUrl;
                    for (var _b = 0, _c = _this.categoryList; _b < _c.length; _b++) {
                        var tmpCategory = _c[_b];
                        if (tmpCategory.name == _this.editInsuranceDetail.insuranceProduct.policyType) {
                            _this.selectedCategory = tmpCategory.id;
                            break;
                        }
                    }
                    _this.getOrganizationList();
                    _this.getProductList();
                }
            }, 1000);
        }
        this.getOrganizationList();
    }
    InsuranceManagementPage.prototype.ionViewWillEnter = function () {
        if (window.localStorage.getItem('selectedUsers')) {
            this.selectedUsers = JSON.parse(window.localStorage.getItem('selectedUsers'));
            console.log('selectedUsers', this.selectedUsers);
            // window.localStorage.removeItem('selectedUsers');
            var tmpValue = [];
            for (var _i = 0, _a = this.selectedUsers; _i < _a.length; _i++) {
                var user = _a[_i];
                if (user.firstName + user.lastName) {
                    tmpValue.push(user.firstName + user.lastName);
                }
                else {
                    tmpValue.push(user.email);
                }
            }
            this.insurance.controls['share'].setValue(tmpValue);
        }
        if (this.editInsuranceDetail) {
            this.event.publish('trackView', 'On Insurance Edit');
        }
        else {
            this.event.publish('trackView', 'On Insurance Create');
        }
    };
    InsuranceManagementPage.prototype.getOrganizationList = function () {
        var currentObj = this;
        var categoryName;
        for (var _i = 0, _a = this.categoryList; _i < _a.length; _i++) {
            var category = _a[_i];
            if (category.id == this.selectedCategory) {
                categoryName = category.name;
                break;
            }
        }
        var loader = this.loadingCtrl.create();
        loader.present();
        currentObj.insuranceAPIService.getOrganisationList(categoryName).then(function (res) {
            loader.dismiss();
            currentObj.companyList = res['data'];
        }).catch(function (error) {
            loader.dismiss();
        });
    };
    InsuranceManagementPage.prototype.categorySelect = function (category) {
        this.selectedCategory = category.id;
        this.getOrganizationList();
        this.insurance.controls['company'].setValue('');
        this.insurance.controls['product'].setValue('');
    };
    InsuranceManagementPage.prototype.takePicture = function () {
        var _this = this;
        var buttonList = [{
                text: 'PHOTO_LIBRARY',
                handler: function () {
                    var type = _this.camera.PictureSourceType.PHOTOLIBRARY;
                    _this.isFromCamera = false;
                    _this.selectPicture(type);
                },
            }, {
                text: 'PHOTO_CAMERA',
                handler: function () {
                    var type = _this.camera.PictureSourceType.CAMERA;
                    _this.isFromCamera = true;
                    _this.selectPicture(type);
                },
            }, {
                text: 'CANCEL',
                role: 'cancel',
                icon: !this.platform.is('ios') ? 'close' : null,
                handler: function () {
                },
            },];
        var _loop_2 = function (alert_1) {
            this_2.translate.get(alert_1['text']).subscribe(function (value) {
                alert_1['text'] = value;
            });
        };
        var this_2 = this;
        for (var _i = 0, buttonList_1 = buttonList; _i < buttonList_1.length; _i++) {
            var alert_1 = buttonList_1[_i];
            _loop_2(alert_1);
        }
        var localizeTitle = 'PHOTO_SOURCE';
        this.translate.get(localizeTitle).subscribe(function (value) {
            localizeTitle = value;
        });
        var actionSheet = this.actionsheetCtrl.create({
            title: localizeTitle,
            cssClass: 'action-sheets-basic-page',
            buttons: buttonList,
        });
        actionSheet.present();
    };
    InsuranceManagementPage.prototype.changeImage = function () {
        this.takePicture();
    };
    InsuranceManagementPage.prototype.removeImage = function () {
        this.showingPriviews = false;
    };
    InsuranceManagementPage.prototype.selectPicture = function (sourceType) {
        var _this = this;
        this.loadimgProfile = false;
        var options = {
            mediaType: this.camera.MediaType.PICTURE,
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: sourceType,
            encodingType: this.camera.EncodingType.PNG,
            saveToPhotoAlbum: false,
            correctOrientation: true,
        };
        var loader = this.loadingCtrl.create();
        loader.present();
        this.camera.getPicture(options).then(function (imagePath) {
            var uploadImage = imagePath;
            if (_this.platform.is('ios')) {
                uploadImage = imagePath.replace(/^file:\/\//, '');
            }
            _this.showingPriviews = true;
            _this.uploadPrevciew = uploadImage;
            _this.insurance.controls['proof'].setValue(uploadImage);
            _this.insurance.controls['imageURI'].setValue(uploadImage);
            loader.dismiss();
        }, function (err) {
            loader.dismiss();
        });
    };
    InsuranceManagementPage.prototype.companySelected = function (event) {
        this.insurance.controls['company'].setValue(event);
        this.getProductList();
    };
    InsuranceManagementPage.prototype.getProductList = function () {
        var _this = this;
        if (this.insurance.get('company').value != '') {
            var categoryName = void 0;
            for (var _i = 0, _a = this.categoryList; _i < _a.length; _i++) {
                var category = _a[_i];
                if (category.id == this.selectedCategory) {
                    categoryName = category.name;
                    break;
                }
            }
            if (categoryName) {
                if (!this.isEditing) {
                    this.insurance.controls['product'].setValue('');
                }
                var loader_1 = this.loadingCtrl.create();
                loader_1.present();
                this.insuranceAPIService.getProductList(this.insurance.get('company').value, categoryName).then(function (res) {
                    loader_1.dismiss();
                    _this.productList = res['data'];
                    if (_this.productList.length == 0) {
                        _this.utilityService.presentToast('ERROR_NO_PRODUCT', true);
                    }
                }).catch(function (error) {
                    loader_1.dismiss();
                    if (error['error']['error']) {
                        _this.utilityService.showAlert(error['error']['error']);
                    }
                    console.error(error);
                });
            }
        }
    };
    InsuranceManagementPage.prototype.onPolicyNumberInputTime = function (event) {
        var pattern = new RegExp("^[a-zA-Z0-9-]+$");
        if (!pattern.test(event.data)) {
            var tmpStr = this.insurance.get('policyNumber').value;
            this.insurance.controls['policyNumber'].setValue(tmpStr.replace(event.data, ''));
        }
    };
    InsuranceManagementPage.prototype.ionViewWillLeave = function () {
        document.body.classList.remove('keyboard-is-close');
    };
    InsuranceManagementPage.prototype.baneficiaryScreen = function () {
        this.validateDate();
        this.submitted = true;
        if (this.insurance.get('company').valid && this.insurance.get('product').valid && this.insurance.get('policyFrequency').valid && this.insurance.get('policyNumber').valid && this.insurance.get('startDate').valid && this.insurance.get('endDate').valid && this.insurance.get('premiumAmount').valid && this.insurance.get('maxClaimAmount').valid && this.insurance.get('policyHolder').valid && this.insurance.get('proof').valid && !this.isValidDate) {
            this.submitted = false;
            var insuranceRequestData = {};
            var tmpPreAmt = this.insurance.get('premiumAmount').value;
            var tmpMaxClaimAmt = this.insurance.get('maxClaimAmount').value;
            if (!this.isEditing) {
                tmpPreAmt.replace(",", "").replace(",", "").replace(",", "");
                tmpMaxClaimAmt.replace(",", "").replace(",", "").replace(",", "");
            }
            insuranceRequestData["organizationId"] = this.insurance.get('company').value;
            insuranceRequestData["insuranceProductId"] = this.insurance.get('product').value;
            insuranceRequestData["policyNumber"] = this.insurance.get('policyNumber').value;
            insuranceRequestData["premiumPaymentFreq"] = this.insurance.get('policyFrequency').value;
            insuranceRequestData["premiumAmount"] = tmpPreAmt;
            insuranceRequestData["maxClaimAmount"] = tmpMaxClaimAmt;
            insuranceRequestData["startDate"] = this.insurance.get('startDate').value;
            insuranceRequestData["endDate"] = this.insurance.get('endDate').value;
            insuranceRequestData["policyDoc"] = this.insurance.get('proof').value;
            insuranceRequestData["imageURI"] = this.insurance.get('imageURI').value;
            insuranceRequestData["insured"] = this.insurance.get('insured').value;
            insuranceRequestData["policyHolder"] = this.insurance.get('policyHolder').value;
            if (this.insurance.get('hotLineNo').valid) {
                insuranceRequestData["hotlinePhoneNo"] = this.insurance.get('hotLineNo').value;
            }
            this.utilityService.imgeURI = insuranceRequestData["imageURI"];
            if (this.isEditing) {
                insuranceRequestData["id"] = this.editInsuranceDetail['_id'];
                insuranceRequestData["document"] = this.editInsuranceDetail['documents'];
                insuranceRequestData["administrator"] = this.editInsuranceDetail['administrator'];
                insuranceRequestData["isSelfBeneficiary"] = this.editInsuranceDetail['isSelfBeneficiary'];
                if (this.editInsuranceDetail.benificiariesMember.length > 0) {
                    this.beneficiaryData = [];
                    for (var _i = 0, _a = this.familyMemberList; _i < _a.length; _i++) {
                        var familyMember = _a[_i];
                        var isAlreadyBeneficiary = false;
                        var tmpBeneficiary = void 0;
                        for (var _b = 0, _c = this.editInsuranceDetail.benificiariesMember; _b < _c.length; _b++) {
                            var beneficiary = _c[_b];
                            tmpBeneficiary = beneficiary;
                            if (familyMember._id == beneficiary._id) {
                                isAlreadyBeneficiary = true;
                                break;
                            }
                        }
                        if (isAlreadyBeneficiary) {
                            this.beneficiaryData.push({ familyMemberId: tmpBeneficiary._id, percentageAmount: tmpBeneficiary.percentageAmount, isBeneficiary: true, relationShip: tmpBeneficiary.relationship });
                        }
                        else {
                            this.beneficiaryData.push({ familyMemberId: familyMember._id, percentageAmount: 0, isBeneficiary: false, relationShip: familyMember.relationship });
                        }
                    }
                }
            }
            this.auth.localStore('familyMemberList', JSON.stringify(this.familyMemberList));
            this.auth.localStore('beneficiaryList', JSON.stringify(this.beneficiaryData));
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__beneficiary_beneficiary__["a" /* BeneficiaryPage */], { insuranceRequest: JSON.stringify(insuranceRequestData), isEditing: this.isEditing });
        }
    };
    InsuranceManagementPage.prototype.showDate = function (isStartDate) {
        var _this = this;
        var done;
        this.translate.get('DATE_DONE').subscribe(function (value) {
            done = value;
        });
        var cancel;
        this.translate.get('CANCEL').subscribe(function (value) {
            cancel = value;
        });
        var date = isStartDate ? this.insurance.get('startDate').value == '' ? new Date() : new Date(this.insurance.get('startDate').value) : this.insurance.get('endDate').value == '' ? new Date() : new Date(this.insurance.get('endDate').value);
        this.datePicker.show({
            date: date,
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
            okText: done,
            cancelText: cancel,
            locale: 'ja_JP',
            doneButtonLabel: done,
            cancelButtonLabel: cancel
        }).then(function (date) {
            console.log(date);
            if (date) {
                var dates = new Date(date);
                var day = dates.getDate();
                var monthIndex = dates.getMonth();
                var year = dates.getFullYear();
                var tmpStartDate = year + (monthIndex >= 9 ? '/' : '/0') + (monthIndex + 1) + (day > 9 ? '/' : '/0') + day;
                if (isStartDate) {
                    _this.insurance.controls['startDate'].setValue(tmpStartDate);
                }
                else {
                    _this.insurance.controls['endDate'].setValue(tmpStartDate);
                }
                _this.validateDate();
            }
        }, function (err) {
            console.log('Error occurred while getting date: ', err);
        });
    };
    InsuranceManagementPage.prototype.validateDate = function () {
        var startDate = new Date(this.insurance.get('startDate').value);
        var endDate = new Date(this.insurance.get('endDate').value);
        this.isValidDate = (startDate >= endDate);
    };
    InsuranceManagementPage.prototype.moveFocus = function (event, nextElement) {
        if (event.code == 'Enter' && nextElement) {
            nextElement.setFocus();
        }
    };
    InsuranceManagementPage.prototype.showUserList = function () {
        window.localStorage.setItem('selectedUsers', JSON.stringify(this.selectedUsers));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__share_policy_share_policy__["a" /* SharePolicyPage */]);
    };
    InsuranceManagementPage.prototype.onChange = function (event) {
        console.log(event);
    };
    InsuranceManagementPage.prototype.isCol3 = function (index) {
        if (index == 0 || index == this.categoryList.length - 1) {
            return '';
        }
        else {
            return null;
        }
    };
    InsuranceManagementPage.prototype.isCol2 = function (index) {
        if (index != 0 && index != this.categoryList.length - 1) {
            return '';
        }
        else {
            return null;
        }
    };
    InsuranceManagementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-insurance-management',template:/*ion-inline-start:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/insurance-management/insurance-management.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'INSURANCE_MANAGEMENT\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="insurance-management">\n  <ion-title>\n    {{ \'SELECT_CATEGORY\' | translate }}\n  </ion-title>\n  <div class="segments">\n    <ion-slides no-bounce>\n      <ion-slide class="swiper-no-swiping">\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col col-3 *ngFor="let category of categoryList;let i = index" (click)="categorySelect(category)">\n              <div class="cat-box" [ngClass]="selectedCategory == category.id? \'active\': \'\'">\n                <div class="active-img">\n                  <img src="assets/imgs/mark.png" *ngIf="selectedCategory == category.id">\n                </div>\n                <div class="cat-icons">\n                  <img [src]="category.image" alt="" />\n                </div>\n                <div class="cat-name">\n                  {{category.title}}\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <div class="forms">\n    <section id="content">\n      <div class="container">\n        <ion-grid no-padding>\n          <ion-row>\n            <form [formGroup]="insurance">\n              <ion-label color="stackedTitle" stacked>{{ \'ORGANISATION\' | translate }} :</ion-label>\n              <ion-item class="select-list">\n                <ion-select interface="action-sheet" formControlName="company" (ionChange)=\'companySelected($event)\' placeholder="{{ \'ORGANISATION\' | translate }}"\n                  cancelText="{{\'CANCEL\' | translate}}">\n                  <ion-option *ngFor="let company of companyList" [value]="company._id">{{company.name}}</ion-option>\n                </ion-select>\n              </ion-item>\n              <p ion-text class="custom-validation" [hidden]="!submitted || insurance.controls.company.valid" color="danger" padding-left>\n                {{\'ERROR_COMPANY\' | translate}}\n              </p>\n              <ion-label color="stackedTitle" stacked>{{ \'PRODUCT\' | translate }} :</ion-label>\n              <ion-item class="select-list">\n                <ion-select interface="action-sheet" formControlName="product" placeholder="{{ \'PRODUCT\' | translate }}" cancelText="{{\'CANCEL\' | translate}}">\n                  <ion-option *ngFor="let product of productList" [value]="product._id">{{product.petName}}</ion-option>\n                </ion-select>\n              </ion-item>\n              <p ion-text class="custom-validation" [hidden]="!submitted || insurance.controls.product.valid" color="danger" padding-left>\n                {{\'ERROR_PRODUCT\' | translate}}\n              </p>\n              <ion-label color="stackedTitle" stacked>{{ \'POLICY_FREQUENCY\' | translate }} :</ion-label>\n              <ion-item class="select-list">\n                <ion-select interface="action-sheet" formControlName="policyFrequency" placeholder="{{ \'POLICY_FREQUENCY\' | translate }}"\n                  cancelText="{{\'CANCEL\' | translate}}">\n                  <ion-option *ngFor="let policyFrequency of policyFrequencyList" [value]="policyFrequency | translate">{{policyFrequency | translate}}</ion-option>\n                </ion-select>\n              </ion-item>\n              <p ion-text class="custom-validation" [hidden]="!submitted || insurance.controls.policyFrequency.valid" color="danger" padding-left>\n                {{\'ERROR_POLICY_FREQUENCY\' | translate}}\n              </p>\n              <ion-item class="item-list">\n                <ion-label color="stackedTitle" stacked>{{ \'INSURED\' | translate }} :</ion-label>\n                <ion-input type="text" placeholder="{{ \'INSURED\' | translate }}" formControlName="insured"></ion-input>\n              </ion-item>\n              <p ion-text class="custom-validation" [hidden]="!submitted || insurance.controls.insured.valid" color="danger" padding-left>\n                {{\'ERROR_INSURED\' | translate}}\n              </p>\n              <ion-item class="item-list">\n                <ion-label color="stackedTitle" stacked>{{ \'POLICY_HOLDER\' | translate }} :</ion-label>\n                <ion-input type="text" placeholder="{{ \'POLICY_HOLDER\' | translate }}" formControlName="policyHolder"></ion-input>\n              </ion-item>\n              <p ion-text class="custom-validation" [hidden]="!submitted || insurance.controls.policyHolder.valid" color="danger" padding-left>\n                {{\'ERROR_POLICY_HOLDER\' | translate}}\n              </p>\n              <!-- <ion-label color="stackedTitle" stacked (click)="showUserList()">{{ \'SHARE\' | translate }} :</ion-label>\n              <ion-tags-input formControlName="share" (onChange)="onChange($event)" [placeholder]="\'select user\'"></ion-tags-input> -->\n\n              <ion-item class="item-list">\n                <ion-label color="stackedTitle" stacked>{{ \'POLICY_NUMBER\' | translate }} :</ion-label>\n                <ion-input tabindex="1" type="text" (input)=\'onPolicyNumberInputTime($event)\' placeholder="{{ \'POLICY_NUMBER\' | translate }}"\n                  formControlName="policyNumber" maxlength="20"></ion-input>\n              </ion-item>\n              <p ion-text class="custom-validation" [hidden]="!submitted || insurance.controls.policyNumber.valid" color="danger" padding-left>\n                {{\'ERROR_POLICY_NO\' | translate}}\n              </p>\n              <div class="insurance-date-main">\n                <ion-label color="stackedTitle" stacked>{{ \'HOT_LINE_NO\' | translate }} :</ion-label>\n                <ion-item class="item-list">\n                  <input type="tel" maxlength="11" [textMask]="{mask: hotLineMask,guide:false}" ng-pattern="/^(-[0-9]*)$/" formControlName="hotLineNo" placeholder="{{ \'HOT_LINE_NO\' | translate }}"\n                  />\n                </ion-item>\n              </div>\n              <div class="insurance-date-main">\n                <ion-label color="stackedTitle" stacked>{{ \'SELECT_START_DATE\' | translate }} :</ion-label>\n                <ion-item class="dates item-list">\n\n                  <input class="dates-input" type="text" displayFormat="YYYY/MM/DD" formControlName="startDate" placeholder="{{ \'SELECT_START_DATE\' | translate }}">\n                  <div class="dates-btn" ion-button full (click)="showDate(true)">{{ \'SELECT_END_DATE\' | translate }}</div>\n                </ion-item>\n              </div>\n              <p ion-text class="custom-validations" [hidden]="!submitted || insurance.controls.startDate.valid" color="danger" padding-left>\n                {{\'ERROR_START_DATE\' | translate}}\n              </p>\n\n              <div class="insurance-date-main">\n                <ion-label color="stackedTitle" stacked>{{ \'SELECT_END_DATE\' | translate }} :</ion-label>\n                <ion-item class="dates item-list">\n                  <input class="dates-input" type="text" displayFormat="YYYY/MM/DD" formControlName="endDate" placeholder="{{ \'SELECT_END_DATE\' | translate }}">\n                  <div class="dates-btn" ion-button full (click)="showDate(false)">{{ \'SELECT_END_DATE\' | translate }}</div>\n                </ion-item>\n              </div>\n              <p ion-text class="custom-validations" [hidden]="!submitted || insurance.controls.endDate.valid" color="danger" padding-left>\n                {{\'ERROR_END_DATE\' | translate}}\n              </p>\n              <p ion-text class="custom-validations" [hidden]="!submitted || !isValidDate" color="danger" padding-left>\n                {{\'ERROR_DATE\' | translate}}\n              </p>\n\n              <div class="insurance-date-main">\n                <ion-label color="stackedTitle" stacked>{{ \'PREMIUM_AMOUNT\' | translate }} :</ion-label>\n                <ion-item class="item-list">\n                  <input type="tel" #b tabindex="2" [textMask]="{mask: premiumAmtmask,guide:false}" maxlength="11" ng-pattern="/^([0-9]*)$/"\n                    formControlName="premiumAmount" placeholder="{{ \'PREMIUM_AMOUNT\' | translate }}" />\n                </ion-item>\n              </div>\n              <p ion-text class="custom-validations" [hidden]="!submitted || insurance.controls.premiumAmount.valid" color="danger" padding-left>\n                {{\'ERROR_PREMIUM_AMOUNT\' | translate}}\n              </p>\n\n              <div class="insurance-date-main">\n                <ion-label color="stackedTitle" stacked>{{ \'MAX_CLAIM_AMOUNT\' | translate }} :</ion-label>\n                <ion-item class="item-list">\n                  <input type="tel" #c tabindex="3" [textMask]="{mask: maxClainAmtmask,guide:false}" maxlength="13 " ng-pattern="/^([0-9]*)$/"\n                    formControlName="maxClaimAmount" placeholder="{{ \'MAX_CLAIM_AMOUNT\' | translate }}" />\n                </ion-item>\n              </div>\n              <p ion-text class="custom-validations" [hidden]="!submitted || insurance.controls.maxClaimAmount.valid" color="danger" padding-left>\n                {{\'ERROR_MAC_CLAIM_AMOUNT\' | translate}}\n              </p>\n              <div class="upload-pdf-img" ion-button full (click)="takePicture()" *ngIf="!showingPriviews">\n                <img src="assets/imgs/upload-icon.png"> {{ \'SELECT_PDF_IMAGE\' | translate }}\n              </div>\n              <ion-grid id="preview-section" *ngIf="showingPriviews" no-padding>\n                <ion-row>\n                  <ion-col col-6>\n                    <div class="preview-img">\n                      <img src="{{uploadPrevciew}}">\n                    </div>\n                  </ion-col>\n                  <ion-col col-6>\n                    <div class="link-text">\n                      <div class="inside-link-text">\n                        <p (click)="changeImage()">{{ \'CHANGE_IMAGE\' | translate }}</p>\n                        <p (click)="removeImage()">{{ \'REMOVE\' | translate }}</p>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <p ion-text class="custom-validation" [hidden]="!submitted || insurance.controls.proof.valid" color="danger" padding-left>\n                {{\'ERROR_PROOF\' | translate}}\n              </p>\n              <button type="button" class="submit-btn" ion-button full (click)="baneficiaryScreen()" *ngIf="familyMemberList && familyMemberList.length > 0 && !isEditing">{{ \'ADD_BENEFICIARY\' | translate }}</button>\n              <button type="button" class="submit-btn" ion-button full (click)="baneficiaryScreen()" *ngIf="familyMemberList && familyMemberList.length == 0 && !isEditing">{{ \'SUBMIT\' | translate }}</button>\n              <button type="button" class="submit-btn" ion-button full (click)="baneficiaryScreen()" *ngIf="familyMemberList && familyMemberList.length > 0 && isEditing">{{ \'EDIT_BENEFICIARY\' | translate }}</button>\n              <button type="button" class="submit-btn" ion-button full (click)="baneficiaryScreen()" *ngIf="familyMemberList && familyMemberList.length == 0 && isEditing">{{ \'UPDATE\' | translate }}</button>\n            </form>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </section>\n  </div>\n</ion-content>'/*ion-inline-end:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/insurance-management/insurance-management.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_10__providers_utility_utility__["a" /* UtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_12__providers_user_service_user_service__["a" /* UserServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_11__providers_insurance_service_insurance_service__["a" /* InsuranceServiceProvider */]])
    ], InsuranceManagementPage);
    return InsuranceManagementPage;
}());

//# sourceMappingURL=insurance-management.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_badge__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_notifications__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__faq_faq__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_notification_service_notification_service__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TabsPage = /** @class */ (function () {
    function TabsPage(nav, platform, notificationAPI, event, badge) {
        var _this = this;
        this.nav = nav;
        this.platform = platform;
        this.notificationAPI = notificationAPI;
        this.event = event;
        this.badge = badge;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_6__faq_faq__["a" /* FaqPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__notifications_notifications__["a" /* NotificationsPage */];
        this.unReadCount = 0;
        platform.ready().then(function () {
            if (nav.get('moveToSetting')) {
                setTimeout(function () {
                    _this.tabRef.select(_this.settingTab);
                }, 500);
            }
            _this.getNotifications();
            _this.event.unsubscribe('updateNotifications');
            _this.event.subscribe('updateNotifications', (function (res) {
                _this.getNotifications();
            }));
            _this.event.publish('checkDuplicateMail');
        }).catch(function (error) {
            console.log(error);
        });
    }
    TabsPage.prototype.getNotifications = function () {
        var _this = this;
        this.notificationAPI.getNotifications().then(function (res) {
            _this.unReadCount = 0;
            var personalNotifications = res['personalNotifications'];
            for (var _i = 0, personalNotifications_1 = personalNotifications; _i < personalNotifications_1.length; _i++) {
                var notification = personalNotifications_1[_i];
                if (notification.status === 'Unread') {
                    _this.unReadCount += 1;
                }
                if (_this.unReadCount === 0) {
                    _this.badge.clear();
                    _this.notificationTab.tabBadge = '';
                }
                else {
                    if (_this.platform.is('ios')) {
                        _this.badge.set(_this.unReadCount);
                    }
                    else if (_this.platform.is('android')) {
                        _this.badge.set(1);
                    }
                    _this.event.publish('fetchNotificationData');
                    _this.notificationTab.tabBadge = '' + _this.unReadCount;
                }
            }
        }).catch(function (error) {
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Tabs"])
    ], TabsPage.prototype, "tabRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('settingTab'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Tab"])
    ], TabsPage.prototype, "settingTab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('notificationTab'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Tab"])
    ], TabsPage.prototype, "notificationTab", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/tabs/tabs.html"*/'<ion-tabs #myTabs>\n  <ion-tab [root]="tab1Root" tabTitle="{{ \'DASHBOARD\' | translate }}" tabIcon="appname-home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="{{ \'SETTINGS\' | translate }}" tabIcon="appname-settings" #settingTab></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="{{ \'FAQ\' | translate }}" tabIcon="appname-text"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="{{ \'NOTIFICATION\' | translate }}" tabIcon="appname-create" #notificationTab (click)="getNotifications()"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_7__providers_notification_service_notification_service__["a" /* NotificationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_badge__["a" /* Badge */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service_api_service__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommonServiceProvider = /** @class */ (function () {
    function CommonServiceProvider(apiService, loadingCtrl) {
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
    }
    CommonServiceProvider.prototype.privacyScreen = function (url) {
        var _this = this;
        var loading = this.loadingCtrl.create({});
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.apiService.get(url).subscribe(function (res) {
                console.log(res);
                loading.dismiss();
                resolve(res);
            }, function (err) {
                console.log(err);
                loading.dismiss();
                reject(err);
            });
        });
    };
    CommonServiceProvider.prototype.getFAQ = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({});
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.apiService.get('static/faq').subscribe(function (res) {
                loading.dismiss();
                resolve(res);
            }, function (err) {
                console.log(err);
                loading.dismiss();
                reject(err);
            });
        });
    };
    CommonServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], CommonServiceProvider);
    return CommonServiceProvider;
}());

//# sourceMappingURL=common-service.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notification_service_notification_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utility_utility__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__insurance_detail_insurance_detail__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(navCtrl, navParams, notificationAPI, utilityService, event, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notificationAPI = notificationAPI;
        this.utilityService = utilityService;
        this.event = event;
        this.auth = auth;
        this.selectNotificationType = 'PERSONAL';
        this.personalNotifications = [];
        this.generalNotifications = [];
        this.personalNotificationsKeys = [];
        this.generalNotificationsKeys = [];
        this.groupedPersonalNotifications = {};
        this.groupedGeneralNotifications = {};
        this.unReadCount = 0;
    }
    NotificationsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.getNotifications(true);
        this.event.publish('trackView', 'On Notifcations');
        this.event.unsubscribe('fetchNotificationData');
        this.event.subscribe('fetchNotificationData', function () {
            _this.getNotifications(false);
        });
    };
    NotificationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationsPage');
    };
    NotificationsPage.prototype.getNotifications = function (updateNotificationCount) {
        var _this = this;
        this.notificationAPI.getNotifications().then(function (res) {
            if (updateNotificationCount) {
                _this.event.publish('updateNotifications', '');
            }
            _this.personalNotificationsKeys = [];
            _this.generalNotificationsKeys = [];
            _this.groupedPersonalNotifications = {};
            _this.groupedGeneralNotifications = {};
            _this.unReadCount = 0;
            _this.personalNotifications = res['personalNotifications'];
            for (var _i = 0, _a = _this.personalNotifications; _i < _a.length; _i++) {
                var notification = _a[_i];
                if (notification.status === 'Unread') {
                    _this.unReadCount += 1;
                }
            }
            _this.filterNotification(_this.personalNotifications, _this.groupedPersonalNotifications, _this.personalNotificationsKeys);
            _this.generalNotifications = res['generalNotifications'];
            _this.filterNotification(_this.generalNotifications, _this.groupedGeneralNotifications, _this.generalNotificationsKeys);
        }).catch(function (error) {
        });
    };
    NotificationsPage.prototype.filterNotification = function (sourceList, destList, keyDestList) {
        var groupDate;
        for (var _i = 0, sourceList_1 = sourceList; _i < sourceList_1.length; _i++) {
            var notification = sourceList_1[_i];
            var notificationDate = notification.createdAt.split('T')[0];
            if (!groupDate || groupDate != notificationDate) {
                groupDate = notificationDate;
            }
            if (groupDate in destList) {
                var notificationList = destList[groupDate];
                notificationList.push(notification);
            }
            else {
                keyDestList.push(groupDate);
                destList[groupDate] = [notification];
            }
        }
    };
    NotificationsPage.prototype.notificationSelected = function (insurance) {
        if (insurance.value == 'ALL') {
            this.slides.slideTo(1, 0);
        }
        if (insurance.value == 'PERSONAL') {
            this.slides.slideTo(0, 0);
        }
        this.selectNotificationType = insurance.value;
    };
    NotificationsPage.prototype.slideChanges = function ($event) {
        if (this.slides._activeIndex == 2 && this.slides.swipeDirection == 'next') {
            this.slides.slideTo(1, 0.5);
        }
        else {
        }
    };
    NotificationsPage.prototype.slideChanged = function (event) {
        if (this.slides._activeIndex == 2 && this.slides.swipeDirection == 'next') {
            this.slides.slideTo(1, 0.5);
        }
        else {
            if (this.slides._activeIndex == 0) {
                this.selectNotificationType = 'PERSONAL';
            }
            if (this.slides._activeIndex == 1) {
                this.selectNotificationType = 'ALL';
            }
        }
    };
    NotificationsPage.prototype.updateNotificationStatus = function (notification, isShowAlert) {
        var _this = this;
        if (notification.status === 'Unread') {
            var notificationData = {
                id: notification._id,
                status: 'Read'
            };
            this.notificationAPI.updateNotificationStatus(notificationData).then(function (res) {
                notification.status = "Read";
                if (isShowAlert) {
                    _this.utilityService.showAlert(res['msg']);
                }
                _this.getNotifications(false);
                _this.event.publish('updateNotifications', '');
            }).catch(function (error) {
                var tmpDic = error.error;
                if (tmpDic.msg) {
                    _this.utilityService.showAlert(tmpDic.msg);
                }
            });
        }
    };
    NotificationsPage.prototype.showDetail = function (notification) {
        if (this.selectNotificationType == 'PERSONAL') {
            console.log('notification', notification);
            var insuranceId = notification.insuranceId;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__insurance_detail_insurance_detail__["a" /* InsuranceDetailPage */], { insuranceId: insuranceId });
            this.updateNotificationStatus(notification, false);
        }
        else {
            this.selectedNotification = notification;
        }
    };
    NotificationsPage.prototype.closeDetail = function () {
        this.selectedNotification = undefined;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"])
    ], NotificationsPage.prototype, "slides", void 0);
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notifications',template:/*ion-inline-start:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/notifications/notifications.html"*/'<ion-header class="custom-heads">\n  <ion-navbar>\n    <ion-title>{{\'NOTIFICATION\' | translate}}</ion-title>\n  </ion-navbar>\n  <div class="segments">\n    <ion-segment [(ngModel)]="selectNotificationType" (ionChange)="notificationSelected($event)">\n      <ion-segment-button value="PERSONAL">\n        {{ \'NOTIFICATION_PERSONAL\' | translate }}\n        <ion-badge class=\'tab-badge\' id="cart-badge" *ngIf="unReadCount > 0">{{unReadCount}}</ion-badge>\n      </ion-segment-button>\n      <ion-segment-button value="ALL">\n        {{ \'NOTIFICATION_ALL\' | translate }}\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n</ion-header>\n\n<ion-content no-padding id="dashboard" overflow-scroll="false" class="no-scroll">\n\n  <ion-slides (ionSlideDidChange)="slideChanged()" (ionSlideWillChange)="slideChanges($event)" class="custom-swipe">\n    <!-- PERSONAL -->\n    <ion-slide>\n      <div id="content">\n        <div class="tab-content" *ngFor="let key of personalNotificationsKeys">\n          <ion-list>\n            <ion-list-header>\n              <div>\n                <label for="" style="padding-left: 5px">\n                  {{key | date:\'yyyy/MM/dd\'}}\n                </label>\n              </div>\n            </ion-list-header>\n            <ion-item *ngFor="let notification of groupedPersonalNotifications[key]" (click)="showDetail(notification)">\n              <div class="title" *ngIf="notification.title">\n                {{notification.title}}\n              </div>\n              <div class="title" *ngIf="notification.title_en && auth.langCode == \'en\'">\n                {{notification.title_en}}\n              </div>\n              <div class="title" *ngIf="notification.title_ja && auth.langCode == \'ja\'">\n                {{notification.title_ja}}\n              </div>\n              <div class="read-status" (click)="updateNotificationStatus(notification,true); $event.stopPropagation()" [ngClass]="notification.status === \'Unread\' ? \'unRead-status\': \'read-status\'">\n                <img src="assets/imgs/verification-mark.png" alt="" *ngIf="notification.status === \'Unread\'">\n              </div>\n            </ion-item>\n          </ion-list>\n        </div>\n        <div class="no-data-found" *ngIf="personalNotifications.length == 0">{{ \'NO_DATA_AVAILABLE\' | translate }} </div>\n      </div>\n    </ion-slide>\n\n    <!-- ALL -->\n    <ion-slide>\n      <div id="content">\n        <div class="tab-content" *ngFor="let key of generalNotificationsKeys">\n          <ion-list>\n            <ion-list-header>\n              <div>\n                <label for="" style="padding-left: 5px">\n                  {{key | date:\'yyyy/MM/dd\'}}\n                </label>\n              </div>\n            </ion-list-header>\n            <ion-item *ngFor="let notification of groupedGeneralNotifications[key]" (click)="showDetail(notification)">\n              <div class="title" *ngIf="notification.title">\n                {{notification.title}}\n              </div>\n              <div class="title" *ngIf="notification.title_en && auth.langCode == \'en\'">\n                {{notification.title_en}}\n              </div>\n              <div class="title" *ngIf="notification.title_ja && auth.langCode == \'ja\'">\n                {{notification.title_ja}}\n              </div>\n            </ion-item>\n          </ion-list>\n        </div>\n        <div class="no-data-found" *ngIf="generalNotifications.length == 0">{{ \'NO_DATA_AVAILABLE\' | translate }} </div>\n      </div>\n    </ion-slide>\n\n\n  </ion-slides>\n\n</ion-content>\n\n<div class="popup-message" *ngIf="selectedNotification" (click)="closeDetail()">\n  <div class="message-container">\n    <div class="message">\n      <label for="">\n        {{selectedNotification.description}}\n      </label>\n    </div>\n    <div class="message-btn">\n      <button (click)="closeDetail()">Ok</button>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/notifications/notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_notification_service_notification_service__["a" /* NotificationServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UtilityProvider = /** @class */ (function () {
    function UtilityProvider(http, toastCtrl, translate, alertCtrl, loadingCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    UtilityProvider.prototype.presentToast = function (message, isNeedToTranslate) {
        var _this = this;
        if (isNeedToTranslate) {
            this.translate.get(message).subscribe(function (value) {
                var toast = _this.toastCtrl.create({
                    message: value,
                    duration: 3000,
                });
                toast.present();
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: message,
                duration: 3000,
            });
            toast.present();
        }
    };
    UtilityProvider.prototype.showAlert = function (message) {
        var alertList = [{
                text: 'OK',
                handler: function () {
                }
            }];
        var _loop_1 = function (alert_1) {
            this_1.translate.get(alert_1['text']).subscribe(function (value) {
                alert_1['text'] = value;
            });
        };
        var this_1 = this;
        for (var _i = 0, alertList_1 = alertList; _i < alertList_1.length; _i++) {
            var alert_1 = alertList_1[_i];
            _loop_1(alert_1);
        }
        var title = 'iBeed Mari';
        this.translate.get('LOGO_NAME').subscribe(function (value) {
            title = value;
        });
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: alertList
        });
        alert.present();
    };
    UtilityProvider.prototype.showAlertWithAction = function (message, action) {
        var alertList = [{
                text: 'OK',
                handler: function () {
                    action();
                }
            }];
        var _loop_2 = function (alert_2) {
            this_2.translate.get(alert_2['text']).subscribe(function (value) {
                alert_2['text'] = value;
            });
        };
        var this_2 = this;
        for (var _i = 0, alertList_2 = alertList; _i < alertList_2.length; _i++) {
            var alert_2 = alertList_2[_i];
            _loop_2(alert_2);
        }
        var title = 'iBeed Mari';
        this.translate.get('LOGO_NAME').subscribe(function (value) {
            title = value;
        });
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: alertList
        });
        alert.present();
    };
    UtilityProvider.prototype.hasLowerCase = function (str) {
        return (/[a-z]/.test(str));
    };
    UtilityProvider.prototype.hasUpperCase = function (str) {
        return (/[A-Z]/.test(str));
    };
    UtilityProvider.prototype.getLoader = function () {
        var loading = this.loadingCtrl.create({
            spinner: '',
            content: "0 %",
        });
        return loading;
    };
    UtilityProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"]])
    ], UtilityProvider);
    return UtilityProvider;
}());

//# sourceMappingURL=utility.js.map

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/notifications/notifications.module": [
		472,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 204;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_env__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigServiceProvider = /** @class */ (function () {
    function ConfigServiceProvider() {
        this.config = __WEBPACK_IMPORTED_MODULE_1__app_env__["a" /* ENV */];
    }
    ConfigServiceProvider.prototype.get = function (key) {
        return this.config[key];
    };
    ConfigServiceProvider.prototype.getConfigValue = function (key) {
        return this.config[key];
    };
    ConfigServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ConfigServiceProvider);
    return ConfigServiceProvider;
}());

//# sourceMappingURL=config-service.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service_api_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service_auth_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserServiceProvider = /** @class */ (function () {
    function UserServiceProvider(apiService, auth, loadingCtrl) {
        this.apiService = apiService;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
    }
    UserServiceProvider.prototype.registerUser = function (userData) {
        var _this = this;
        var loading = this.loadingCtrl.create({});
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.apiService.post('user/signup', userData).subscribe(function (res) {
                loading.dismiss();
                resolve(res);
            }, function (err) {
                loading.dismiss();
                reject(err);
            });
        });
    };
    UserServiceProvider.prototype.loggedInUser = function (userData) {
        var _this = this;
        var loading = this.loadingCtrl.create({});
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.apiService.post('user/authenticate', userData).subscribe(function (res) {
                var loggedUser = res;
                _this.auth.localStore("LoggedUser", JSON.stringify(loggedUser));
                _this.auth.localStore("isUserLogged", true);
                loading.dismiss();
                resolve(res);
            }, function (err) {
                loading.dismiss();
                reject(err);
            });
        });
    };
    UserServiceProvider.prototype.socialLoginUser = function (userData) {
        var _this = this;
        var loading = this.loadingCtrl.create({});
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.apiService.post('user/authenticate-provider', userData).subscribe(function (res) {
                if (!('multiple' in res)) {
                    _this.auth.localStore("isUserLogged", true);
                }
                var loggedUser = res;
                _this.auth.localStore("LoggedUser", JSON.stringify(loggedUser));
                loading.dismiss();
                resolve(res);
            }, function (err) {
                loading.dismiss();
                reject(err);
            });
        });
    };
    UserServiceProvider.prototype.getFamilyMember = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({});
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.apiService.getWithHeader('familyMember/my-family-member').subscribe(function (res) {
                loading.dismiss();
                resolve({ list: res['familyList'] });
            }, function (err) {
                loading.dismiss();
                reject(err);
            });
        });
    };
    UserServiceProvider.prototype.deleteUser = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({});
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.apiService.postWithHeader('user/delete-user-account', {}).subscribe(function (res) {
                loading.dismiss();
                resolve(res);
            }, function (err) {
                loading.dismiss();
                reject(err);
            });
        });
    };
    UserServiceProvider.prototype.addFamilyMember = function (familyMemberData) {
        var _this = this;
        var loading = this.loadingCtrl.create({});
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.apiService.postWithHeader('familyMember/add', familyMemberData).subscribe(function (res) {
                loading.dismiss();
                resolve(res);
            }, function (err) {
                loading.dismiss();
                reject(err);
            });
        });
    };
    UserServiceProvider.prototype.getBeneficiaryFamilyMember = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({});
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.apiService.getWithHeader('familyMember/my-family-with-beneficiary').subscribe(function (res) {
                loading.dismiss();
                resolve({ list: res['familyList'] });
            }, function (err) {
                loading.dismiss();
                reject(err);
            });
        });
    };
    UserServiceProvider.prototype.getProfile = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({});
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.apiService.getWithHeader('user/profile').subscribe(function (res) {
                loading.dismiss();
                var loggedUser = JSON.parse(_this.auth.getLocalStore('LoggedUser'));
                loggedUser['userData'] = res;
                _this.auth.localStore("LoggedUser", JSON.stringify(loggedUser));
                _this.auth.localStore("isUserLogged", true);
                resolve({ user: res });
            }, function (err) {
                loading.dismiss();
                reject(err);
            });
        });
    };
    UserServiceProvider.prototype.editFamilyMember = function (familyMemberData) {
        var _this = this;
        var loading = this.loadingCtrl.create({});
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.apiService.postWithHeader('familyMember/update', familyMemberData).subscribe(function (res) {
                loading.dismiss();
                resolve(res);
            }, function (err) {
                loading.dismiss();
                reject(err);
            });
        });
    };
    UserServiceProvider.prototype.updateProfile = function (profileData) {
        var _this = this;
        var loading = this.loadingCtrl.create({});
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.apiService.postWithHeader('user/update-profile', profileData).subscribe(function (res) {
                var loggedUser = JSON.parse(_this.auth.getLocalStore('LoggedUser'));
                if ('userData' in res) {
                    loggedUser.userData = res['userData'];
                }
                else if ('address' in res) {
                    loggedUser.userData.address = res['address'];
                }
                _this.auth.localStore("LoggedUser", JSON.stringify(loggedUser));
                loading.dismiss();
                resolve(res);
            }, function (err) {
                loading.dismiss();
                reject(err);
            });
        });
    };
    UserServiceProvider.prototype.deleteFamilyMember = function (data) {
        var _this = this;
        var loading = this.loadingCtrl.create({});
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.apiService.postWithHeader('familyMember/remove-family-member', data).subscribe(function (res) {
                loading.dismiss();
                resolve(res);
            }, function (err) {
                loading.dismiss();
                reject(err);
            });
        });
    };
    UserServiceProvider.prototype.changePassword = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.apiService.postWithHeader('user/change-password', data).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    UserServiceProvider.prototype.getAddress = function (address) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.apiService.geoCoding("https://maps.googleapis.com/maps/api/geocode/json?components=country:JP|postal_code:" + address.trim() + "&key=" + _this.apiService.GOOGLE_KEY + "&sensor=false").subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    UserServiceProvider.prototype.forgotPassword = function (email) {
        var _this = this;
        var loading = this.loadingCtrl.create({});
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.apiService.post('user/forgot-password', { 'email': email }).subscribe(function (res) {
                loading.dismiss();
                resolve(res);
            }, function (err) {
                loading.dismiss();
                reject(err);
            });
        });
    };
    UserServiceProvider.prototype.updateLastActiveTime = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.apiService.postWithHeader('user/update-profile', {}).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    UserServiceProvider.prototype.searchUser = function (page, searchString) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "?" + ('page=' + page);
            if (searchString) {
                query = query + "&where=" + searchString;
            }
            _this.apiService.getWithHeader('user/user-list-for-share-policy' + query).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    UserServiceProvider.prototype.logOut = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.apiService.postWithHeader('user/logout', {}).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    UserServiceProvider.prototype.mergerAccount = function (userData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.apiService.post('user/merge-request', userData).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    UserServiceProvider.prototype.emailExists = function (userData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.apiService.postWithHeader('user/check-email', userData).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    UserServiceProvider.prototype.migrationVerifed = function (userData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.apiService.postWithHeader('user/check-migration', userData).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    UserServiceProvider.prototype.migrationFinished = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.apiService.getWithHeader('user/check-migration-status').subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    UserServiceProvider.prototype.updateDeviceToken = function (userData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.apiService.postWithHeader('user/update-device-token', userData).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    UserServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], UserServiceProvider);
    return UserServiceProvider;
}());

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeneficiaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utility_utility__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_insurance_service_insurance_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
 //import ChangeDetectorRef






var BeneficiaryPage = /** @class */ (function () {
    function BeneficiaryPage(navCtrl, navParams, insuranceAPIService, loadingCtrl, utilityService, cdr, auth, translate, transfer, event) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.insuranceAPIService = insuranceAPIService;
        this.loadingCtrl = loadingCtrl;
        this.utilityService = utilityService;
        this.cdr = cdr;
        this.auth = auth;
        this.translate = translate;
        this.transfer = transfer;
        this.event = event;
        this.beneficiaryData = [];
        this.familyMemberList = [];
        this.reset = 0;
        this.soloBeneficiary = true;
        this.insuranceRequest = JSON.parse(navParams.get('insuranceRequest'));
        this.isEditing = navParams.get('isEditing');
        if (this.isEditing) {
            this.administrator = this.insuranceRequest['administrator'];
            this.soloBeneficiary = this.insuranceRequest['isSelfBeneficiary'];
        }
        this.insuranceRequest["imageURI"] = this.utilityService.imgeURI;
        this.familyMemberList = JSON.parse(this.auth.getLocalStore('familyMemberList'));
        this.beneficiaryData = JSON.parse(this.auth.getLocalStore('beneficiaryList'));
        if (!this.isEditing) {
            for (var _i = 0, _a = this.beneficiaryData; _i < _a.length; _i++) {
                var tmpBeneficiary = _a[_i];
                tmpBeneficiary.isBeneficiary = true;
            }
        }
        for (var _b = 0, _c = this.familyMemberList; _b < _c.length; _b++) {
            var familyMember = _c[_b];
            if (this.administrator) {
                familyMember.isAdministrator = familyMember._id == this.administrator;
            }
            else {
                familyMember.isAdministrator = false;
            }
            if (this.isEditing) {
                for (var _d = 0, _e = this.beneficiaryData; _d < _e.length; _d++) {
                    var tmpBeneficiary = _e[_d];
                    if (familyMember._id == tmpBeneficiary.familyMemberId) {
                        familyMember.beneficiary = tmpBeneficiary.isBeneficiary;
                    }
                }
            }
        }
        this.auth.clearStorageFor('familyMemberList');
        this.auth.clearStorageFor('beneficiaryList');
        this.loggedUser = JSON.parse(this.auth.getLocalStore('LoggedUser'));
    }
    BeneficiaryPage.prototype.ionViewWillEnter = function () {
        if (this.isEditing) {
            this.event.publish('trackView', 'On Beneficiary Edit');
        }
        else {
            this.event.publish('trackView', 'On Beneficiary Create');
        }
    };
    BeneficiaryPage.prototype.ngDoCheck = function () {
        this.cdr.detectChanges();
    };
    BeneficiaryPage.prototype.submitForm = function () {
        var _this = this;
        if (this.beneficiaryData.length > 0) {
            var total_1 = 0;
            var hasBeneficiary_1 = false;
            this.beneficiaryData.map(function (beneficiary) {
                if (beneficiary.isBeneficiary) {
                    hasBeneficiary_1 = true;
                    total_1 += beneficiary.percentageAmount;
                }
            });
            if (total_1 != 100 && hasBeneficiary_1 && !this.soloBeneficiary) {
                this.utilityService.presentToast("ERROR_BENEFICIARY_SHARE_1", true);
                return;
            }
        }
        var title = '';
        this.translate.get('UPLOADING').subscribe(function (value) {
            title = value;
        });
        this.loader = this.loadingCtrl.create({
            content: title
        });
        this.loader.present();
        // let data = { "extension": "png", "contentType": "image/png" }
        var fileTransfer = this.transfer.create();
        var insuranceRequestData = {};
        var tmpPreAmt = this.insuranceRequest['premiumAmount'];
        var tmpMaxClaimAmt = this.insuranceRequest['maxClaimAmount'];
        if (typeof tmpMaxClaimAmt === 'string' && tmpMaxClaimAmt.includes(",")) {
            tmpMaxClaimAmt = tmpMaxClaimAmt.replace(",", "").replace(",", "").replace(",", "");
            tmpMaxClaimAmt = parseInt(tmpMaxClaimAmt);
        }
        else {
            tmpMaxClaimAmt = parseInt(tmpMaxClaimAmt);
        }
        if (typeof tmpPreAmt === 'string' && tmpPreAmt.includes(",")) {
            tmpPreAmt = tmpPreAmt.replace(",", "").replace(",", "").replace(",", "");
            tmpPreAmt = parseInt(tmpPreAmt);
        }
        else {
            tmpPreAmt = parseInt(tmpPreAmt);
        }
        var date = new Date(this.insuranceRequest['startDate']);
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        var tmpStartDate = year + (monthIndex >= 9 ? '-' : '-0') + (monthIndex + 1) + (day > 9 ? '-' : '-0') + day;
        date = new Date(this.insuranceRequest['endDate']);
        day = date.getDate();
        monthIndex = date.getMonth();
        year = date.getFullYear();
        var tmpEndDate = year + (monthIndex >= 9 ? '-' : '-0') + (monthIndex + 1) + (day > 9 ? '-' : '-0') + day;
        insuranceRequestData["organizationId"] = this.insuranceRequest['organizationId'];
        insuranceRequestData["insuranceProductId"] = this.insuranceRequest['insuranceProductId'];
        insuranceRequestData["policyNumber"] = this.insuranceRequest['policyNumber'];
        insuranceRequestData["premiumPaymentFreq"] = this.insuranceRequest['premiumPaymentFreq'];
        insuranceRequestData["insured"] = this.insuranceRequest['insured'];
        insuranceRequestData["policyHolder"] = this.insuranceRequest['policyHolder'];
        if ('hotlinePhoneNo' in this.insuranceRequest) {
            insuranceRequestData["hotlinePhoneNo"] = this.insuranceRequest['hotlinePhoneNo'];
        }
        insuranceRequestData["premiumAmount"] = parseInt(tmpPreAmt);
        insuranceRequestData["maxClaimAmount"] = parseInt(tmpMaxClaimAmt);
        insuranceRequestData["startDate"] = tmpStartDate;
        insuranceRequestData["endDate"] = tmpEndDate;
        insuranceRequestData["isSelfBeneficiary"] = this.soloBeneficiary;
        console.log('tmpMaxClaimAmt', typeof tmpMaxClaimAmt);
        console.log('tmpPreAmt', typeof tmpPreAmt);
        if (!this.insuranceRequest['imageURI'].includes('https://')) {
            delete insuranceRequestData["documents"];
        }
        else {
            insuranceRequestData["documents"] = this.insuranceRequest['document'];
            ;
        }
        if (this.beneficiaryData.length > 0) {
            var total_2 = 0;
            var beneficiaryList_1 = [];
            var hasBeneficiary_2 = false;
            this.beneficiaryData.map(function (beneficiary) {
                if (beneficiary.isBeneficiary) {
                    hasBeneficiary_2 = true;
                    total_2 += beneficiary.percentageAmount;
                    beneficiaryList_1.push(beneficiary);
                }
            });
            if (total_2 != 100 && hasBeneficiary_2 && !this.soloBeneficiary) {
                this.utilityService.presentToast("ERROR_BENEFICIARY_SHARE_1", true);
                return;
            }
            if (!this.soloBeneficiary) {
                insuranceRequestData["beneficiaries"] = JSON.stringify(beneficiaryList_1);
            }
            else {
                delete insuranceRequestData["beneficiaries"];
            }
        }
        if (this.administrator) {
            insuranceRequestData["administrator"] = this.administrator;
        }
        else {
            insuranceRequestData["administrator"] = this.loggedUser.userData._id;
        }
        var options = {
            fileKey: 'policyDoc',
            fileName: 'policyDoc',
            chunkedMode: true,
            mimeType: "image/jpeg",
            headers: { 'authorization': 'Bearer ' + this.loggedUser['token'], 'X-L10N-Locale': this.auth.langCode },
            params: insuranceRequestData
        };
        console.log('this.insuranceRequest', insuranceRequestData);
        if (this.isEditing) {
            insuranceRequestData["id"] = this.insuranceRequest['id'];
            if (!this.administrator) {
                insuranceRequestData["administrator"] = undefined;
            }
            if (this.insuranceRequest['imageURI'].includes('https://')) {
                this.uploadInsuranceDetail(insuranceRequestData);
            }
            else {
                fileTransfer.upload(this.insuranceRequest['imageURI'], this.insuranceAPIService.getBaseURL() + 'policy/update', options, true).then(function (data) {
                    _this.loader.dismiss();
                    console.log('data', data);
                    var responseDic = JSON.parse(data.response);
                    _this.utilityService.showAlert(responseDic.msg);
                    // this.utilityService.showAlert(data['data']['msg']);
                    _this.navCtrl.popToRoot();
                }, function (error) {
                    console.log(error);
                    _this.loader.dismiss();
                    var errorDic = JSON.parse(error.body);
                    console.log('errorDic', errorDic);
                    if (errorDic) {
                        _this.utilityService.showAlert(errorDic.error);
                    }
                });
            }
        }
        else {
            fileTransfer.upload(this.insuranceRequest['imageURI'], this.insuranceAPIService.getBaseURL() + 'policy/create', options, true).then(function (data) {
                _this.loader.dismiss();
                console.log('data', data);
                var responseDic = JSON.parse(data.response);
                console.log('responseDic', responseDic);
                _this.utilityService.showAlert(responseDic.msg);
                // this.utilityService.showAlert(data['data']['msg']);
                _this.navCtrl.popToRoot();
            }, function (error) {
                console.log('error', error.body);
                _this.loader.dismiss();
                var errorDic = JSON.parse(error.body);
                if (errorDic) {
                    _this.utilityService.showAlert(errorDic.error);
                }
            });
        }
    };
    BeneficiaryPage.prototype.changeBeneficiary = function (indx) {
        var tmpBeneficiary = this.beneficiaryData[indx];
        if (tmpBeneficiary.isBeneficiary) {
            tmpBeneficiary.isBeneficiary = false;
        }
        else {
            tmpBeneficiary.isBeneficiary = true;
        }
    };
    BeneficiaryPage.prototype.isBeneficiary = function (index) {
        var tmpBeneficiary = this.beneficiaryData[index];
        return tmpBeneficiary.isBeneficiary;
    };
    BeneficiaryPage.prototype.setAdministrator = function (event, indx) {
        var index = 0;
        for (var _i = 0, _a = this.familyMemberList; _i < _a.length; _i++) {
            var familyMember = _a[_i];
            if (indx == index) {
                familyMember.isAdministrator = !familyMember.isAdministrator;
                this.administrator = familyMember.isAdministrator ? familyMember._id : undefined;
            }
            index += 1;
        }
    };
    BeneficiaryPage.prototype.uploadInsuranceDetail = function (insuranceRequest) {
        var _this = this;
        console.log('insuranceRequest', insuranceRequest);
        this.insuranceAPIService.editInsurance(insuranceRequest).then(function (res) {
            if (_this.loader) {
                _this.loader.dismiss();
            }
            _this.utilityService.showAlert(res['data']['msg']);
            _this.navCtrl.popToRoot();
        }).catch(function (error) {
            if (_this.loader) {
                _this.loader.dismiss();
            }
            if (error['error']['error']) {
                _this.utilityService.showAlert(error['error']['error']);
            }
        });
    };
    BeneficiaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-beneficiary',template:/*ion-inline-start:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/beneficiary/beneficiary.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'BENEFICIARY\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="beneficiary">\n  <div class="bottom-section">\n    <div class="family-listing" *ngIf="!isInsuranceProof">\n      <div class="toggle">\n        <ion-item>\n          <ion-label>{{\'SOLO_BENEFICIARY\' | translate }}</ion-label>\n          <ion-toggle [(ngModel)]="soloBeneficiary" color="energized"></ion-toggle>\n        </ion-item>\n      </div>\n      <div *ngIf="!soloBeneficiary">\n        <ion-grid no-padding class="persion-info" *ngFor="let familyMember of familyMemberList; let indx=index">\n          <ion-row>\n            <ion-col col-2>\n              <ion-avatar item-start>\n                <img [src]="familyMember.profilePic">\n              </ion-avatar>\n            </ion-col>\n            <ion-col col-10>\n              <div class="right-side-section">\n                <ion-label>{{familyMember.lastName}} {{familyMember.firstName}}</ion-label>\n                <h2>{{familyMember.relationship}}</h2>\n              </div>\n              <div class="toggle">\n                <ion-item>\n                  <ion-label> {{ \'ADMINISTRATOR\' | translate }}</ion-label>\n                  <ion-toggle color="energized" [checked]="true" (ionChange)="setAdministrator($event,indx)" *ngIf=" administrator && administrator == familyMember._id"></ion-toggle>\n                  <ion-toggle color="energized" [checked]="false" (ionChange)="setAdministrator($event,indx)" *ngIf=" administrator == undefined"></ion-toggle>\n                  <ion-toggle color="energized" [checked]="false" *ngIf=" administrator && administrator != familyMember._id" disabled></ion-toggle>\n                </ion-item>\n                <ion-item no-line>\n                  <ion-label> {{ \'BENEFICIARY\' | translate }}</ion-label>\n                  <ion-toggle color="energized" [checked]="familyMember.beneficiary" (ionChange)="changeBeneficiary(indx)"></ion-toggle>\n                </ion-item>\n              </div>\n              <div class="range">\n                <ion-grid no-padding>\n                  <ion-row>\n                    <ion-col col-3>\n                      <ion-label no-margin> {{ \'AMOUNT\' | translate }}</ion-label>\n                    </ion-col>\n                    <ion-col col-9>\n                      <ion-item *ngIf="isBeneficiary(indx)">\n                        <ion-range min="0" [max]="100" pin="true" color="secondary" debounce="500" [(ngModel)]="beneficiaryData[indx].percentageAmount"></ion-range>\n                      </ion-item>\n                      <ion-item *ngIf="!isBeneficiary(indx)">\n                        <ion-range min="0" [max]="100" pin="true" color="secondary" debounce="500" [(ngModel)]="reset" readonly disabled></ion-range>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n    <div class="insurance" *ngIf="isInsuranceProof">\n      <img [src]="insuranceDetails.signedUrl">\n    </div>\n    <div class="submit-insurance">\n      <button class="submit-btn" ion-button full (click)="submitForm()" *ngIf="!isEditing">{{ \'SUBMIT\' | translate }}</button>\n      <button class="submit-btn" ion-button full (click)="submitForm()" *ngIf="isEditing">{{ \'UPDATE\' | translate }}</button>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/beneficiary/beneficiary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__providers_insurance_service_insurance_service__["a" /* InsuranceServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_2__providers_utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], BeneficiaryPage);
    return BeneficiaryPage;
}());

//# sourceMappingURL=beneficiary.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharePolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SharePolicyPage = /** @class */ (function () {
    function SharePolicyPage(navCtrl, navParams, userAPI) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userAPI = userAPI;
        this.currentPageSelected = 1;
        this.paginationValues = {
            total: 0,
            max: 0,
            pages: 0
        };
        this.selectedUsers = JSON.parse(window.localStorage.getItem('selectedUsers'));
    }
    SharePolicyPage.prototype.ionViewDidLoad = function () {
    };
    SharePolicyPage.prototype.serachUser = function (event) {
        var _this = this;
        if (this.searchString !== '') {
            this.userAPI.searchUser(this.currentPageSelected, JSON.stringify({ searchString: this.searchString })).then(function (res) {
                var userList = res['userList'];
                _this.users = userList['organizationList'];
                for (var _i = 0, _a = _this.users; _i < _a.length; _i++) {
                    var user = _a[_i];
                    if (_this.selectedUsers) {
                        for (var _b = 0, _c = _this.selectedUsers; _b < _c.length; _b++) {
                            var selecteUser = _c[_b];
                            user.isSelected = false;
                            if (user._id === selecteUser._id) {
                                user.isSelected = true;
                                break;
                            }
                        }
                    }
                    else {
                        user.isSelected = false;
                    }
                }
                var tmpPagination = userList['paginationDetail'];
                if (tmpPagination['page'] == 1) {
                    _this.paginationValues = userList['paginationDetail'];
                }
                if (typeof event !== 'string') {
                    event.complete();
                }
            }).catch(function (error) {
            });
        }
    };
    SharePolicyPage.prototype.canceSearch = function () {
        this.searchString = '';
    };
    SharePolicyPage.prototype.searchNextPage = function (event) {
        if (this.currentPageSelected < this.paginationValues['pages']) {
            this.currentPageSelected += 1;
            this.serachUser(event);
        }
        else {
            event.complete();
        }
    };
    SharePolicyPage.prototype.selectUser = function (user) {
        console.log('user', user);
        user.isSelected = !user.isSelected;
    };
    SharePolicyPage.prototype.saveSharedPerson = function () {
        this.selectedUsers = [];
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            console.log(user.isSelected);
            if (user.isSelected) {
                this.selectedUsers.push(user);
            }
        }
        window.localStorage.setItem('selectedUsers', JSON.stringify(this.selectedUsers));
        this.navCtrl.pop();
    };
    SharePolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-share-policy',template:/*ion-inline-start:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/share-policy/share-policy.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>User List</ion-title>\n    <ion-buttons end class="dots-head">\n      <button ion-button icon-only (click)="saveSharedPerson()">\n        <ion-icon name="md-checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-searchbar placeholder="{{ \'SEARCH_USER\' | translate }}" [(ngModel)]="searchString" [showCancelButton]="shouldShowCancel"\n    (ionInput)="serachUser(\'\')" (ionCancel)="canceSearch()">\n  </ion-searchbar>\n\n  <ion-list>\n    <ion-item *ngFor="let user of users">\n      <ion-label>\n        <div *ngIf="user.firstName && user.lastName">\n          <h2>{{user.firstName}} {{user.lastName}}</h2>\n        </div>\n        <div *ngIf="user.firstName && user.lastName">\n          <h4>{{user.email}}</h4>\n        </div>\n        <div *ngIf="!(user.firstName && user.lastName)">\n          <h2>{{user.email}}</h2>\n        </div>\n      </ion-label>\n      <ion-checkbox [checked]="user.isSelected" (ionChange)="selectUser(user)"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n  <ion-infinite-scroll (ionInfinite)="searchNextPage($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/share-policy/share-policy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */]])
    ], SharePolicyPage);
    return SharePolicyPage;
}());

//# sourceMappingURL=share-policy.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilySharePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_insurance_service_insurance_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utility_utility__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FamilySharePage = /** @class */ (function () {
    function FamilySharePage(navCtrl, navParams, userAPISerivce, insuranceAPI, util) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userAPISerivce = userAPISerivce;
        this.insuranceAPI = insuranceAPI;
        this.util = util;
        this.familyMemberList = [];
        this.shareFamilyMemberIds = [];
        this.policyId = navParams.get('id');
        this.shareFamilyMemberIds = navParams.get('sharedFamilyMemberIds');
        this.getFamilyList();
        0;
    }
    FamilySharePage.prototype.ionViewDidLoad = function () {
    };
    FamilySharePage.prototype.ionViewWillLeave = function () {
        window.localStorage.setItem('shareFamilyMember', JSON.stringify(this.shareFamilyMemberIds));
    };
    FamilySharePage.prototype.getFamilyList = function () {
        var _this = this;
        this.userAPISerivce.getBeneficiaryFamilyMember().then(function (res) {
            _this.familyMemberList = res['list'];
        }).catch(function (error) {
            _this.familyMemberList = [];
        });
    };
    FamilySharePage.prototype.shareInsuranceWithMember = function (id) {
        if (this.shareFamilyMemberIds.indexOf(id) == -1) {
            this.shareFamilyMemberIds.push(id);
        }
        else {
            this.shareFamilyMemberIds.splice(this.shareFamilyMemberIds.indexOf(id), 1);
        }
    };
    FamilySharePage.prototype.shareInsurance = function () {
        var _this = this;
        var shareInsuranceData = { policyId: this.policyId, familyMemberIds: this.shareFamilyMemberIds };
        this.insuranceAPI.shareInsurance(shareInsuranceData).then(function (res) {
            _this.util.showAlert(res['msg']);
            window.localStorage.setItem('shareFamilyMember', JSON.stringify(_this.shareFamilyMemberIds));
        }).catch(function (error) {
            var tmpError = error.error;
            _this.util.showAlert(tmpError.error);
        });
    };
    FamilySharePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-family-share',template:/*ion-inline-start:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/family-share/family-share.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>共有の設定</ion-title>\n    <ion-buttons end class="confirm-button" *ngIf="familyMemberList && familyMemberList.length != 0">\n      <button class="edit-screen" ion-button icon-only (click)="shareInsurance()">\n        <ion-icon class="editDetailIcon" name="checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="familyMemberList.length > 0">\n    <ion-grid no-padding class="persion-info" *ngFor="let familyMember of familyMemberList; let indx=index">\n      <ion-row>\n        <ion-col col-2>\n          <ion-avatar item-start>\n            <img [src]="familyMember.profilePic">\n          </ion-avatar>\n        </ion-col>\n        <ion-col col-6>\n          <div class="right-side-section">\n            <ion-label>{{familyMember.lastName}} {{familyMember.firstName}}</ion-label>\n            <h6>{{familyMember.relationship}}</h6>\n          </div>\n        </ion-col>\n        <ion-col col-4>\n          <ion-item no-line>\n            <ion-toggle color="energized" [checked]="shareFamilyMemberIds.indexOf(familyMember._id) != -1" (ionChange)="shareInsuranceWithMember(familyMember._id)"></ion-toggle>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class="no-data-found" *ngIf="familyMemberList == undefine || familyMemberList.length == 0">\n    {{ \'NO_DATA_AVAILABLE\' | translate }}\n  </div>\n</ion-content>'/*ion-inline-end:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/family-share/family-share.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_insurance_service_insurance_service__["a" /* InsuranceServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_utility_utility__["a" /* UtilityProvider */]])
    ], FamilySharePage);
    return FamilySharePage;
}());

//# sourceMappingURL=family-share.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider() {
    }
    AuthServiceProvider.prototype.localStore = function (key, data) {
        return window.localStorage.setItem(key, data);
    };
    AuthServiceProvider.prototype.getLocalStore = function (key) {
        return window.localStorage.getItem(key);
    };
    AuthServiceProvider.prototype.clearStorageFor = function (key) {
        return window.localStorage.removeItem(key);
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_insurance_service_insurance_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__insurance_management_insurance_management__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__insurance_detail_insurance_detail__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, insuranceAPIService, loadingCtrl, platform, event, auth) {
        this.navCtrl = navCtrl;
        this.insuranceAPIService = insuranceAPIService;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.event = event;
        this.auth = auth;
        this.allInsuranceList = [];
        this.autoInsuranceList = [];
        this.lifeInsuranceList = [];
        this.healthInsuranceList = [];
        this.petInsuranceList = [];
        this.homeInsuranceList = [];
        this.selectedInsranceType = "ALL";
        this.query = 'ALL';
        this.loggedUser = JSON.parse(this.auth.getLocalStore('LoggedUser'));
    }
    DashboardPage.prototype.ionViewWillEnter = function () {
        this.event.publish('trackView', 'On Dashboard');
        this.getPolicyList();
        document.body.classList.remove('keyboard-is-close');
    };
    DashboardPage.prototype.insuranceScreen = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__insurance_management_insurance_management__["a" /* InsuranceManagementPage */]);
    };
    DashboardPage.prototype.selectInsurance = function (insurance) {
        if (insurance.value == 'ALL') {
            this.slides.slideTo(0, 0);
        }
        if (insurance.value == 'AUTO') {
            this.slides.slideTo(1, 0);
        }
        if (insurance.value == 'LIFE') {
            this.slides.slideTo(2, 0);
        }
        if (insurance.value == 'HEALTH') {
            this.slides.slideTo(3, 0);
        }
        if (insurance.value == 'PET') {
            this.slides.slideTo(4, 0);
        }
        if (insurance.value == 'HOME') {
            this.slides.slideTo(5, 0);
        }
        this.selectedInsranceType = insurance.value;
    };
    DashboardPage.prototype.getPolicyList = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({});
        loader.present();
        this.insuranceAPIService.getInsuranceList().then(function (res) {
            var data = res['data'];
            _this.allInsuranceList = data['docs'];
            _this.fileterInsurance();
            loader.dismiss();
        }).catch(function (error) {
            loader.dismiss();
            console.error(error);
        });
    };
    DashboardPage.prototype.fileterInsurance = function () {
        var _this = this;
        this.autoInsuranceList = [];
        this.lifeInsuranceList = [];
        this.healthInsuranceList = [];
        this.petInsuranceList = [];
        this.homeInsuranceList = [];
        this.allInsuranceList.map(function (insurance) {
            if (insurance.insuranceProduct.policyType.toLowerCase() == 'auto') {
                _this.autoInsuranceList.push(insurance);
            }
            else if (insurance.insuranceProduct.policyType.toLowerCase() == 'life') {
                _this.lifeInsuranceList.push(insurance);
            }
            else if (insurance.insuranceProduct.policyType.toLowerCase() == 'health') {
                _this.healthInsuranceList.push(insurance);
            }
            else if (insurance.insuranceProduct.policyType.toLowerCase() == 'pet') {
                _this.petInsuranceList.push(insurance);
            }
            else if (insurance.insuranceProduct.policyType.toLowerCase() == 'home') {
                _this.homeInsuranceList.push(insurance);
            }
        });
    };
    DashboardPage.prototype.getImageName = function (type) {
        if (type == 'Auto') {
            return 'assets/imgs/dash-icon-1.svg';
        }
        else if (type == 'Health') {
            return 'assets/imgs/dash-icon-2.svg';
        }
        else if (type == 'Life') {
            return 'assets/imgs/dash-icon-4.svg';
        }
        else if (type == 'Pet') {
            return 'assets/imgs/dash-icon-3.svg';
        }
        else if (type == 'Home') {
            return 'assets/imgs/dash-icon-5.svg';
        }
    };
    DashboardPage.prototype.showDetail = function (insurance) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__insurance_detail_insurance_detail__["a" /* InsuranceDetailPage */], { insurance: JSON.stringify(insurance) });
    };
    DashboardPage.prototype.slideChanges = function ($event) {
        console.log(this.slides._activeIndex);
        if (this.slides._activeIndex == 6 && this.slides.swipeDirection == 'next') {
            this.slides.slideTo(5, 0.5);
        }
        else {
        }
    };
    DashboardPage.prototype.slideChanged = function (event) {
        if (this.slides._activeIndex == 6 && this.slides.swipeDirection == 'next') {
            this.slides.slideTo(5, 0.5);
        }
        else {
            if (this.slides._activeIndex == 0) {
                this.query = 'ALL';
            }
            if (this.slides._activeIndex == 1) {
                this.query = 'AUTO';
            }
            if (this.slides._activeIndex == 2) {
                this.query = 'LIFE';
            }
            if (this.slides._activeIndex == 3) {
                this.query = 'HEALTH';
            }
            if (this.slides._activeIndex == 4) {
                this.query = 'PET';
            }
            if (this.slides._activeIndex == 5) {
                this.query = 'HOME';
            }
            this.selectedInsranceType = this.query;
        }
    };
    DashboardPage.prototype.isShared = function (insurance) {
        var isPolicyShare = false;
        if (insurance.notificationSharedWith) {
            for (var _i = 0, _a = insurance.notificationSharedWith; _i < _a.length; _i++) {
                var notificationShare = _a[_i];
                isPolicyShare = this.loggedUser.userData._id == notificationShare.toUserId;
                if (isPolicyShare) {
                    break;
                }
            }
        }
        return isPolicyShare;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"])
    ], DashboardPage.prototype, "slides", void 0);
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/dashboard/dashboard.html"*/'<ion-header class="custom-head">\n\n  <ion-navbar>\n    <ion-title>{{ \'DASHBOARD\' | translate }}</ion-title>\n    <ion-buttons end class="dots-head">\n      <button ion-button icon-only (click)="insuranceScreen()">\n        <ion-icon name="md-add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <div class="segments">\n    <ion-segment [(ngModel)]="selectedInsranceType" (ionChange)="selectInsurance($event)">\n      <ion-segment-button value="ALL">\n        {{ \'ALL\' | translate }}\n      </ion-segment-button>\n      <ion-segment-button value="AUTO">\n        {{ \'AUTO\' | translate }}\n      </ion-segment-button>\n      <ion-segment-button value="LIFE">\n        {{ \'LIFE\' | translate }}\n      </ion-segment-button>\n      <ion-segment-button value="HEALTH">\n        {{ \'HEALTH\' | translate }}\n      </ion-segment-button>\n      <ion-segment-button value="PET">\n        {{ \'PET\' | translate }}\n      </ion-segment-button>\n      <ion-segment-button value="HOME">\n        {{ \'HOME\' | translate }}\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n</ion-header>\n\n\n<ion-content no-padding id="dashboard" overflow-scroll="false" class="no-scroll">\n\n  <ion-slides (ionSlideDidChange)="slideChanged()" (ionSlideWillChange)="slideChanges($event)" class="custom-swipe">\n    <!-- All -->\n    <ion-slide>\n      <div id="content">\n        <div class="tab-content" *ngFor="let insurance of allInsuranceList" (click)="showDetail(insurance)">\n          <dashboard-listing-detail [insurance]="insurance" [isShared]="isShared(insurance)"></dashboard-listing-detail>\n        </div>\n        <div class="no-data-found" *ngIf="allInsuranceList.length == 0">{{ \'NO_DATA_AVAILABLE\' | translate }} </div>\n      </div>\n    </ion-slide>\n\n    <!-- AUTO -->\n    <ion-slide>\n      <div id="content">\n        <div class="tab-content" *ngFor="let insurance of autoInsuranceList" (click)="showDetail(insurance)">\n          <dashboard-listing-detail [insurance]="insurance" [isShared]="isShared(insurance)"></dashboard-listing-detail>\n        </div>\n        <div class="no-data-found" *ngIf="autoInsuranceList.length == 0">{{ \'NO_DATA_AVAILABLE\' | translate }} </div>\n      </div>\n    </ion-slide>\n\n    <!-- LIFE -->\n    <ion-slide>\n      <div id="content">\n        <div class="tab-content" *ngFor="let insurance of lifeInsuranceList" (click)="showDetail(insurance)">\n          <dashboard-listing-detail [insurance]="insurance" [isShared]="isShared(insurance)"></dashboard-listing-detail>\n        </div>\n        <div class="no-data-found" *ngIf="lifeInsuranceList.length == 0">{{ \'NO_DATA_AVAILABLE\' | translate }} </div>\n      </div>\n    </ion-slide>\n\n    <!-- HEALTH -->\n    <ion-slide>\n      <div id="content">\n        <div class="tab-content" *ngFor="let insurance of healthInsuranceList" (click)="showDetail(insurance)">\n          <dashboard-listing-detail [insurance]="insurance" [isShared]="isShared(insurance)"></dashboard-listing-detail>\n        </div>\n        <div class="no-data-found" *ngIf="healthInsuranceList.length == 0">{{ \'NO_DATA_AVAILABLE\' | translate }} </div>\n      </div>\n    </ion-slide>\n\n    <!-- PET -->\n    <ion-slide>\n      <div id="content">\n        <div class="tab-content" *ngFor="let insurance of petInsuranceList" (click)="showDetail(insurance)">\n          <dashboard-listing-detail [insurance]="insurance" [isShared]="isShared(insurance)"></dashboard-listing-detail>\n        </div>\n        <div class="no-data-found" *ngIf="petInsuranceList.length == 0">{{ \'NO_DATA_AVAILABLE\' | translate }} </div>\n      </div>\n    </ion-slide>\n    <!-- HOME -->\n    <ion-slide>\n      <div id="content">\n        <div class="tab-content" *ngFor="let insurance of homeInsuranceList" (click)="showDetail(insurance)">\n          <dashboard-listing-detail [insurance]="insurance" [isShared]="isShared(insurance)"></dashboard-listing-detail>\n        </div>\n        <div class="no-data-found" *ngIf="homeInsuranceList.length == 0">{{ \'NO_DATA_AVAILABLE\' | translate }} </div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_insurance_service_insurance_service__["a" /* InsuranceServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utility_utility__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, auth, event, userAPIService, camera, platform, actionsheetCtrl, loadingCtrl, actionSheetCtrl, translate, utility, keyboard, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.event = event;
        this.userAPIService = userAPIService;
        this.camera = camera;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.translate = translate;
        this.utility = utility;
        this.keyboard = keyboard;
        this.alertCtrl = alertCtrl;
        this.query = 'personal';
        this.isEdit = false;
        this.selectedProfileType = 'personal';
        this.familyMemberList = [];
        platform.ready().then(function () {
            keyboard.onKeyboardShow().subscribe(function () {
                document.body.classList.add('keyboard-is-open');
                document.body.classList.remove('keyboard-is-close');
            });
            keyboard.onKeyboardHide().subscribe(function () {
                document.body.classList.remove('keyboard-is-open');
                document.body.classList.add('keyboard-is-close');
            });
        });
        this.getUserData();
        this.event.unsubscribe('updateFamilyList');
        this.event.subscribe('updateFamilyList', function (res) {
            _this.getFamilyMember();
        });
        this.event.unsubscribe('updateProfile');
        this.event.subscribe('updateProfile', function (res) {
            _this.isEdit = !_this.isEdit;
            _this.getUserData();
        });
        this.event.unsubscribe('isEdit');
        this.event.subscribe('isEdit', function (res) {
            _this.isEdit = true;
        });
        this.event.unsubscribe('isEditFalse');
        this.event.subscribe('isEditFalse', function (res) {
            _this.isEdit = false;
            _this.event.publish('resetFrom');
        });
    }
    SettingsPage.prototype.ionViewWillEnter = function () {
        this.getProfileData();
        this.getFamilyMember();
        this.event.publish('trackView', 'On Settings');
    };
    SettingsPage.prototype.ionViewWillLeave = function () {
        this.uploadPreview = undefined;
        if (this.isEdit) {
            this.isEdit = false;
            this.event.publish('resetFrom');
            this.event.publish('resetFromPersonalDetail');
            this.event.publish('resetFromAddressDetail');
        }
    };
    SettingsPage.prototype.getUserData = function () {
        this.loggedUser = JSON.parse(this.auth.getLocalStore('LoggedUser'));
        console.log('sds', this.loggedUser);
    };
    SettingsPage.prototype.getFamilyMember = function () {
        var _this = this;
        this.userAPIService.getFamilyMember().then(function (res) {
            _this.familyMemberList = res['list'];
        }).catch(function (error) {
        });
    };
    SettingsPage.prototype.editForm = function () {
        this.isEdit = !this.isEdit;
        if (this.isEdit) {
            if (this.selectedProfileType == 'personal') {
                this.event.publish('trackView', 'On Personal edit');
            }
            else if (this.selectedProfileType == 'address') {
                this.event.publish('trackView', 'On Address edit');
            }
            else if (this.selectedProfileType == 'family') {
                this.event.publish('trackView', 'On Family edit');
            }
        }
        else {
            this.event.publish('trackView', 'On Settings');
        }
        if (!this.isEdit) {
            this.event.publish('resetFrom');
            this.event.publish('resetFromPersonalDetail');
            this.event.publish('resetFromAddressDetail');
        }
    };
    SettingsPage.prototype.changeProfileType = function (profileType) {
        if (!this.isEdit) {
            if (profileType.value == 'personal') {
                console.log("personal");
                this.slides.slideTo(0, 0);
            }
            if (profileType.value == 'address') {
                console.log("address");
                this.slides.slideTo(1, 0);
            }
            if (profileType.value == 'family') {
                console.log("personal");
                this.slides.slideTo(2, 0);
            }
            this.selectedProfileType = profileType.value;
            if (this.isEdit) {
                this.editForm();
            }
        }
    };
    SettingsPage.prototype.slideChanges = function ($event) {
        if (this.slides._activeIndex == 3 && this.slides.swipeDirection == 'next') {
            this.slides.slideTo(2, 0.5);
        }
        else {
        }
    };
    SettingsPage.prototype.slideChanged = function () {
        if (this.slides._activeIndex == 3 && this.slides.swipeDirection == 'next') {
            this.slides.slideTo(2, 0.5);
        }
        else {
            if (this.slides._activeIndex == 0) {
                this.query = 'personal';
            }
            if (this.slides._activeIndex == 1) {
                this.query = 'address';
            }
            if (this.slides._activeIndex == 2) {
                this.query = 'family';
            }
            this.selectedProfileType = this.query;
        }
    };
    SettingsPage.prototype.accountsOption = function () {
        var _this = this;
        var buttonList = [];
        if (this.selectedProfileType != 'family') {
            buttonList.push({
                text: 'EDIT',
                handler: function () {
                    _this.editForm();
                },
            });
        }
        buttonList.push({
            text: 'SETTING_LOGOUT',
            handler: function () {
                _this.logoutBtn();
            },
        });
        buttonList.push({
            text: 'SETTING_DA',
            cssClass: 'delete-account',
            handler: function () {
                _this.userDelete();
            },
        });
        buttonList.push({
            text: 'CANCEL',
            role: 'cancel',
            icon: !this.platform.is('ios') ? 'close' : null,
            handler: function () {
            },
        });
        var _loop_1 = function (alert_1) {
            this_1.translate.get(alert_1['text']).subscribe(function (value) {
                alert_1['text'] = value;
            });
        };
        var this_1 = this;
        for (var _i = 0, buttonList_1 = buttonList; _i < buttonList_1.length; _i++) {
            var alert_1 = buttonList_1[_i];
            _loop_1(alert_1);
        }
        var title = 'SETTING_SYA';
        this.translate.get(title).subscribe(function (value) {
            title = value;
        });
        var actionSheet = this.actionsheetCtrl.create({
            title: title,
            cssClass: 'select-action-sheet',
            buttons: buttonList,
        });
        actionSheet.present();
    };
    SettingsPage.prototype.alertUserDelete = function (msg) {
        var _this = this;
        var alertList = [{
                text: 'OK',
                handler: function () {
                    _this.auth.clearStorageFor('LoggedUser');
                    _this.auth.clearStorageFor('isUserLogged');
                    _this.event.publish('logout');
                }
            }];
        var _loop_2 = function (alert_2) {
            this_2.translate.get(alert_2['text']).subscribe(function (value) {
                alert_2['text'] = value;
            });
        };
        var this_2 = this;
        for (var _i = 0, alertList_1 = alertList; _i < alertList_1.length; _i++) {
            var alert_2 = alertList_1[_i];
            _loop_2(alert_2);
        }
        var title = 'iBeed Mari';
        this.translate.get('LOGO_NAME').subscribe(function (value) {
            title = value;
        });
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: alertList
        });
        alert.present();
    };
    SettingsPage.prototype.userDelete = function () {
        var _this = this;
        var alertList = [{
                text: 'YES',
                handler: function () {
                    _this.userAPIService.deleteUser().then(function (res) {
                        _this.alertUserDelete(res['msg']);
                    }).catch(function (error) {
                    });
                }
            }, {
                text: 'NO',
                handler: function () {
                }
            }];
        var _loop_3 = function (alert_3) {
            this_3.translate.get(alert_3['text']).subscribe(function (value) {
                alert_3['text'] = value;
            });
        };
        var this_3 = this;
        for (var _i = 0, alertList_2 = alertList; _i < alertList_2.length; _i++) {
            var alert_3 = alertList_2[_i];
            _loop_3(alert_3);
        }
        var title = 'iBeed Mari';
        this.translate.get('LOGO_NAME').subscribe(function (value) {
            title = value;
        });
        var message = 'Are you sure, you want to delete account ?';
        this.translate.get('DELETE_CONFIRMATION').subscribe(function (value) {
            message = value;
        });
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: alertList
        });
        alert.present();
    };
    SettingsPage.prototype.logoutBtn = function () {
        var _this = this;
        var alertList = [{
                text: 'YES',
                handler: function () {
                    _this.userAPIService.logOut().then(function (res) {
                    }).catch(function (error) {
                    });
                    _this.auth.clearStorageFor('LoggedUser');
                    _this.auth.clearStorageFor('isUserLogged');
                    _this.event.publish('logout');
                }
            }, {
                text: 'NO',
                handler: function () {
                }
            }];
        var _loop_4 = function (alert_4) {
            this_4.translate.get(alert_4['text']).subscribe(function (value) {
                alert_4['text'] = value;
            });
        };
        var this_4 = this;
        for (var _i = 0, alertList_3 = alertList; _i < alertList_3.length; _i++) {
            var alert_4 = alertList_3[_i];
            _loop_4(alert_4);
        }
        var title = 'iBeed Mari';
        this.translate.get('LOGO_NAME').subscribe(function (value) {
            title = value;
        });
        var message = 'Are you sure, you want to logout ?';
        this.translate.get('LOGOUT_CONFIRMATION').subscribe(function (value) {
            message = value;
        });
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: alertList
        });
        alert.present();
    };
    SettingsPage.prototype.takePicture = function () {
        var _this = this;
        var buttonList = [{
                text: 'PHOTO_LIBRARY',
                handler: function () {
                    var type = _this.camera.PictureSourceType.PHOTOLIBRARY;
                    _this.selectPicture(type);
                },
            }, {
                text: 'PHOTO_CAMERA',
                handler: function () {
                    var type = _this.camera.PictureSourceType.CAMERA;
                    _this.selectPicture(type);
                },
            }, {
                text: 'CANCEL',
                role: 'cancel',
                icon: !this.platform.is('ios') ? 'close' : null,
                handler: function () {
                    //  UtilityServiceProvider.log('Cancel clicked');
                },
            },];
        var _loop_5 = function (alert_5) {
            this_5.translate.get(alert_5['text']).subscribe(function (value) {
                alert_5['text'] = value;
            });
        };
        var this_5 = this;
        for (var _i = 0, buttonList_2 = buttonList; _i < buttonList_2.length; _i++) {
            var alert_5 = buttonList_2[_i];
            _loop_5(alert_5);
        }
        var localizeTitle = 'PHOTO_SOURCE';
        this.translate.get(localizeTitle).subscribe(function (value) {
            localizeTitle = value;
        });
        var actionSheet = this.actionsheetCtrl.create({
            title: localizeTitle,
            cssClass: 'action-sheets-basic-page',
            buttons: buttonList,
        });
        actionSheet.present();
    };
    SettingsPage.prototype.changeImage = function () {
        this.takePicture();
    };
    SettingsPage.prototype.selectPicture = function (sourceType) {
        var _this = this;
        var options = {
            mediaType: this.camera.MediaType.PICTURE,
            quality: 100,
            targetHeight: 200,
            targetWidth: 200,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: sourceType,
            encodingType: this.camera.EncodingType.PNG,
            saveToPhotoAlbum: false,
        };
        var loader = this.loadingCtrl.create();
        loader.present();
        this.camera.getPicture(options).then(function (imagePath) {
            _this.uploadPreview = 'data:image/jpeg;base64,' + imagePath;
            loader.dismissAll();
        }, function (err) {
            loader.dismissAll();
        });
    };
    SettingsPage.prototype.getProfileData = function () {
        var _this = this;
        this.userAPIService.getProfile().then(function (res) {
            _this.getUserData();
        }).catch(function (error) {
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"])
    ], SettingsPage.prototype, "slides", void 0);
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/settings/settings.html"*/'<ion-header class="custom-header">\n\n  <ion-navbar>\n    <ion-title>{{ \'MY_ACCOUNT\' | translate }}</ion-title>\n    <ion-buttons end class="dots-head">\n      <button class="edit-screen" ion-button icon-only (click)="accountsOption()" *ngIf="!isEdit">\n        <ion-icon name="more"></ion-icon>\n      </button>\n      <button class="edit-screen close-icon" ion-button icon-only (click)="editForm()" *ngIf="isEdit">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding id="settings-screen" class="no-scroll">\n  <div class="inside-setting-screen">\n    <div class="profile-info-section">\n      <ion-grid no-padding class="infoPart">\n        <ion-row>\n          <ion-col col-4>\n            <ion-avatar item-start *ngIf="!loggedUser.userData.profilePic || uploadPreview">\n              <img src="assets/imgs/defaultprofile.png" *ngIf="!uploadPreview">\n              <img [src]="uploadPreview" (click)="takePicture()" *ngIf="uploadPreview">\n              <div class="upload-img" (click)="takePicture()" *ngIf="isEdit && selectedProfileType == \'personal\'">\n                <img src="assets/imgs/settings/img-upload.png">\n              </div>\n            </ion-avatar>\n            <ion-avatar item-start *ngIf="loggedUser.userData.profilePic && !uploadPreview">\n              <img [src]="loggedUser.userData.profilePic">\n              <div class="upload-img" (click)="takePicture()" *ngIf="isEdit && selectedProfileType == \'personal\'">\n                <img src="assets/imgs/settings/img-upload.png">\n              </div>\n            </ion-avatar>\n          </ion-col>\n          <ion-col col-8>\n            <div class="basic-info" padding>\n              <p>{{loggedUser.userData.lastName}} {{loggedUser.userData.firstName}}</p>\n              <p>{{loggedUser.insuranceCount}} {{ \'INSURANCE\' | translate }}</p>\n              <p>{{familyMemberList.length}} {{ \'FAMILY_MEMBERS\' | translate }}</p>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div class="setting-segments">\n      <ion-segment [(ngModel)]="selectedProfileType" (ionChange)="changeProfileType($event)" [disabled]="isEdit">\n        <ion-segment-button value="personal">\n          {{ \'PERSONAL\' | translate }}\n        </ion-segment-button>\n        <ion-segment-button value="address">\n          {{ \'ADDRESS\' | translate }}\n        </ion-segment-button>\n        <ion-segment-button value="family">\n          {{ \'FAMILY\' | translate }}\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n    <div class="personal-detail-section">\n\n      <ion-slides (ionSlideDidChange)="slideChanged()" (ionSlideWillChange)="slideChanges($event)" class="custom-swipe" [ngClass]="isEdit? \'swiper-no-swiping\': \'\'">\n        <ion-slide>\n          <!-- Personal  Detail Section -->\n          <personal-detail [fName]="loggedUser.userData.firstName" [lName]="loggedUser.userData.lastName" [email]="loggedUser.userData.email ? loggedUser.userData.email : loggedUser.userData.provider.profile.email"\n            [phNumber]="loggedUser.userData.phone" [faxNumber]="loggedUser.userData.fax" [isEdit]="isEdit" [profilePic]="uploadPreview"\n            [isSocialLogin]="loggedUser.userData.provider">\n          </personal-detail>\n        </ion-slide>\n        <ion-slide>\n          <!-- Address Section -->\n          <addressdetail [address1]="loggedUser.userData.address.addressLine1" [address2]="loggedUser.userData.address.addressLine2"\n            [city]="loggedUser.userData.address.city" [prefecture]="loggedUser.userData.address.prefecture" [ward]="loggedUser.userData.address.wards"\n            [postalCode]="loggedUser.userData.address.postalCode" [address3]="loggedUser.userData.address.addressLine3" [isEdit]="isEdit">\n          </addressdetail>\n        </ion-slide>\n        <ion-slide>\n          <!-- Family Section -->\n          <family-detail [familyList]="familyMemberList" [isEdit]="isEdit">\n          </family-detail>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__["a" /* UserServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_utility_utility__["a" /* UtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_faq_questions_faq_questions__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_service_common_service__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FaqPage = /** @class */ (function () {
    function FaqPage(navCtrl, navParams, commonAPIService, event, appVersion) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonAPIService = commonAPIService;
        this.event = event;
        this.appVersion = appVersion;
        this.categoryList = [];
        this.version = '1.0';
        this.appVersion.getVersionNumber().then(function (res) {
            _this.version = res;
        });
    }
    FaqPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.commonAPIService.getFAQ().then(function (res) {
            console.log(res);
            _this.faqData = res['faq']['category'];
            _this.categoryList = [];
            _this.faqData.map(function (category) {
                _this.categoryList.push(category);
            });
        }).catch(function (error) {
            console.log(error);
        });
        this.event.publish('trackView', 'On Faq list');
    };
    FaqPage.prototype.ionViewDidLoad = function () {
    };
    FaqPage.prototype.pushCategoryQuetions = function (category) {
        console.log('category', category);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_faq_questions_faq_questions__["a" /* FaqQuestionsPage */], { category: JSON.stringify(category) });
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-faq',template:/*ion-inline-start:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/faq/faq.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'FAQ\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="accordian">\n  <label class="question-label">{{ \'FAQLIST\' | translate }}</label>\n  <ion-list class="accordion-list">\n    <ion-list-header no-lines no-padding>\n      <button ion-item detail-none class="section" *ngFor="let list of categoryList" (click)="pushCategoryQuetions(list)">\n        {{ list.name }}\n        <ion-icon item-left name="arrow-forward"></ion-icon>\n      </button>\n    </ion-list-header>\n    <div style="text-align: center;padding-top: 10px;">\n      v{{version}}\n    </div>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/faq/faq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_5__providers_common_service_common_service__["a" /* CommonServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__["a" /* AppVersion */]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqQuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_faq_details_faq_details__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FaqQuestionsPage = /** @class */ (function () {
    function FaqQuestionsPage(navCtrl, navParams, event) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = event;
        this.questionsList = [];
        this.categoryData = JSON.parse(navParams.get('category'));
        this.questionsList = this.categoryData['questions'];
        console.log('sdsd', this.questionsList);
    }
    FaqQuestionsPage.prototype.ionViewWillEnter = function () {
        this.event.publish('trackView', 'On Faq Question list');
    };
    FaqQuestionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaqQuestionsPage');
    };
    FaqQuestionsPage.prototype.pushQuetionsDetails = function (que) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_faq_details_faq_details__["a" /* FaqDetailsPage */], { question: JSON.stringify(que) });
    };
    FaqQuestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-faq-questions',template:/*ion-inline-start:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/faq-questions/faq-questions.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'FAQQUESTIONS\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="quetionsfaq">\n    <label class="question-label">{{ \'FAQQUESTIONSLIST\' | translate }}</label>\n    <ion-list class="accordion-list">\n        <ion-list-header no-lines no-padding *ngFor="let que of questionsList">\n          <button ion-item detail-none class="section" (click)="pushQuetionsDetails(que)">\n            <ion-icon item-left name="arrow-forward" ></ion-icon>\n              {{ que.question }}\n          </button>\n        </ion-list-header>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/faq-questions/faq-questions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], FaqQuestionsPage);
    return FaqQuestionsPage;
}());

//# sourceMappingURL=faq-questions.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaqDetailsPage = /** @class */ (function () {
    function FaqDetailsPage(navCtrl, navParams, event) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = event;
        this.questionData = JSON.parse(navParams.get('question'));
        console.log('sdasdad', this.questionData);
    }
    FaqDetailsPage.prototype.ionViewWillEnter = function () {
        this.event.publish('trackView', 'On Faq Details');
    };
    FaqDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaqDetailsPage');
    };
    FaqDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-faq-details',template:/*ion-inline-start:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/faq-details/faq-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'FAQDETAILS\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <label class="question-label">{{ \'FAQDETAILS\' | translate }}</label>\n  <ion-list class="faqDetailList">\n    <ion-title>{{questionData.question}}</ion-title>\n    <div class="discription">\n      <p *ngFor="let item of questionData.answers">{{item}}</p>\n    </div>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/faq-details/faq-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], FaqDetailsPage);
    return FaqDetailsPage;
}());

//# sourceMappingURL=faq-details.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_password_forgot_password__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utility_utility__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_service_user_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_email_service_user_email_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_validation_service_validation_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_plus__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_version__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, navParams, formBuilder, utilityService, userAPIService, fb, googlePlus, event, platform, appVersion, userEmailService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.utilityService = utilityService;
        this.userAPIService = userAPIService;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.event = event;
        this.platform = platform;
        this.appVersion = appVersion;
        this.userEmailService = userEmailService;
        this.isPassword = true;
        this.status = false;
        this.submitted = false;
        this.version = '1.0';
        this.showPassword = function () {
            _this.isPassword = !_this.isPassword;
            _this.status = !_this.status;
        };
        platform.ready().then(function () {
            _this.appVersion.getVersionNumber().then(function (res) {
                console.log('res', res);
                _this.version = res;
            });
        });
        this.userData = this.formBuilder.group({
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_8__providers_validation_service_validation_service__["a" /* ValidationService */].emailValidator])],
        });
    }
    SigninPage.prototype.ionViewWillEnter = function () {
        this.event.publish('trackView', 'On Login');
    };
    SigninPage.prototype.ionViewDidLoad = function () {
    };
    SigninPage.prototype.signIn = function () {
        var _this = this;
        this.submitted = true;
        if (!this.userData.get('email').valid) {
            // this.utilityService.presentToast('ERROR_VALID_EMAIL', true);
        }
        else if (!this.userData.get('password').valid) {
            // this.utilityService.presentToast('ERROR_PASSWORD', true);
        }
        else {
            this.submitted = false;
            var userRequest = {
                password: this.userData.get('password').value,
                email: this.userData.get('email').value,
                loginType: 'Email',
                platform: this.platform.is('ios') ? 'iOS' : 'Android',
                deviceToken: window.localStorage.getItem('DeviceToken'),
                version: this.version
            };
            this.userAPIService.loggedInUser(userRequest).then(function (res) {
                console.log('res', res);
                var userData = res['userData'];
                if ('isWalkThrough' in userData) {
                    if (userData['isWalkThrough']) {
                        _this.event.publish('walkThrough');
                    }
                    else {
                        _this.event.publish('loggedIn');
                    }
                }
                else {
                    _this.event.publish('loggedIn');
                }
            }).catch(function (error) {
                var msg = error.error;
                if (msg.error) {
                    _this.utilityService.showAlert(msg.error);
                }
            });
        }
    };
    SigninPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.facebook = function () {
        var _this = this;
        this.fb.logout().then(function (res) {
        }).catch(function (error) {
        });
        this.fb.login(['public_profile', 'email']).then(function (success) {
            _this.fb.api('me?fields=id,first_name,last_name,email,picture.width(720).height(720).as(picture_large)', ['public_profile']).then(function (profile_data) {
                var profile = {};
                profile.emails = [{ type: 'account', value: profile_data.email }];
                profile._json = profile_data;
                var profileData = {
                    "lastName": profile_data['last_name'],
                    "firstName": profile_data['first_name'],
                    "profilePic": profile_data['picture_large']['data']['url'],
                    "email": profile_data['email'],
                    "id": profile_data['id']
                };
                var socialInfo = {
                    "accessToken": success.authResponse.accessToken,
                    "id": profile_data['id'],
                    "profile": profileData
                };
                var userRequestData = {
                    "provider": "Facebook",
                    "lastName": profile_data['last_name'],
                    "firstName": profile_data['first_name'],
                    "profilePic": profile_data['picture_large']['data']['url'],
                    "socialInfo": socialInfo,
                    platform: _this.platform.is('ios') ? 'iOS' : 'Android',
                    deviceToken: window.localStorage.getItem('DeviceToken'),
                    version: _this.version
                };
                _this.userAPIService.socialLoginUser(userRequestData).then(function (res) {
                    console.log('profile_data', profile_data);
                    if ('multiple' in res && res['multiple']) {
                        _this.userEmailService.isFromSignup = profile_data['email'] ? false : true;
                        window.localStorage.removeItem('noEmailFound');
                        _this.event.publish('emailExists', { email: profile_data['email'], userData: userRequestData });
                    }
                    else {
                        var userData = res['userData'];
                        if (userData['email']) {
                            window.localStorage.removeItem('noEmailFound');
                            if ('isWalkThrough' in userData) {
                                if (userData['isWalkThrough']) {
                                    _this.event.publish('walkThrough');
                                }
                                else {
                                    _this.event.publish('loggedIn');
                                }
                            }
                            else {
                                _this.event.publish('loggedIn');
                            }
                        }
                        else {
                            window.localStorage.setItem('noEmailFound', 'true');
                            // window.localStorage.removeItem('LoggedUser');
                            _this.userEmailService.isFromSignup = true;
                            _this.event.publish('emailExists', { email: profile_data['email'], userData: userRequestData });
                        }
                    }
                }).catch(function (error) {
                    var msg = error.error;
                    if (msg.error) {
                        _this.utilityService.showAlert(msg.error);
                    }
                });
            }, function (error_profile) {
                // loading.dismissAll();
            });
        }).catch(function (e) { console.log('Error logging into Facebook', e); });
    };
    SigninPage.prototype.googleLogin = function () {
        var _this = this;
        this.googlePlus.logout().then(function (res) {
        }).catch(function (err) {
        });
        // 'webClientId': "268170607060-8ul2up810gap06oil5cjaku686pujqbo.apps.googleusercontent.com" Production
        // 'webClientId': "26192727788-jcvo0647356hg6uadj7i9r952epjebps.apps.googleusercontent.com" Staging
        this.googlePlus.login({
            'webClientId': "268170607060-8ul2up810gap06oil5cjaku686pujqbo.apps.googleusercontent.com"
        }).then(function (res) {
            var profileData = {
                "lastName": res['familyName'],
                "firstName": res['givenName'],
                "profilePic": res['imageUrl'],
                "email": res['email'],
                "id": res['userId']
            };
            var socialInfo = {
                "accessToken": res['idToken'],
                "id": res['userId'],
                "profile": profileData
            };
            var userRequestData = {
                "provider": "Google",
                "lastName": res['familyName'],
                "firstName": res['givenName'],
                "profilePic": res['imageUrl'],
                "socialInfo": socialInfo,
                platform: _this.platform.is('ios') ? 'iOS' : 'Android',
                deviceToken: window.localStorage.getItem('DeviceToken'),
                version: _this.version
            };
            _this.userAPIService.socialLoginUser(userRequestData).then(function (ress) {
                console.log('res', ress);
                if ('multiple' in ress && ress['multiple']) {
                    _this.userEmailService.isFromSignup = false;
                    window.localStorage.removeItem('noEmailFound');
                    _this.event.publish('emailExists', { email: res['email'], userData: userRequestData });
                }
                else {
                    window.localStorage.removeItem('noEmailFound');
                    var userData = ress['userData'];
                    if ('isWalkThrough' in userData) {
                        if (userData['isWalkThrough']) {
                            _this.event.publish('walkThrough');
                        }
                        else {
                            _this.event.publish('loggedIn');
                        }
                    }
                    else {
                        _this.event.publish('loggedIn');
                    }
                }
            }).catch(function (error) {
                var msg = error.error;
                if (msg.error) {
                    _this.utilityService.showAlert(msg.error);
                }
            });
        }).catch(function (err) {
            console.error("err", err);
        });
    };
    SigninPage.prototype.passwordType = function () {
        return this.isPassword ? 'password' : 'text';
    };
    SigninPage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    SigninPage.prototype.moveFocus = function (event, nextElement) {
        if (event.code == 'Enter') {
            nextElement.setFocus();
        }
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signin',template:/*ion-inline-start:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/signin/signin.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'SIGN_IN\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="login" class="social-screen">\n  <section id="header">\n    <div class="container">\n      <ion-grid>\n        <ion-row>\n          <img src="assets/imgs/banner.jpg" class="bannerImg">\n          <!-- <h2>{{ \'LOGO_NAME\' | translate }}</h2>\n            <h3>{{ \'SIGN_IN\' | translate }}</h3> -->\n        </ion-row>\n      </ion-grid>\n    </div>\n  </section>\n  <section id="content">\n    <div class="container">\n      <ion-grid no-padding>\n        <ion-row>\n          <form [formGroup]="userData">\n\n            <ion-item>\n              <ion-label color="stackedTitle" stacked>{{ \'EMAIL\' | translate }} :</ion-label>\n              <ion-input formControlName="email" type="email" placeholder="{{ \'EMAIL\' | translate }}" tabindex="1" (keyup)="moveFocus($event,b)"></ion-input>\n            </ion-item>\n\n\n\n            <p ion-text class="custom-validation" [hidden]="!submitted || userData.controls.email.valid" color="danger" padding-left>\n              {{\'ERROR_VALID_EMAIL\' | translate}}\n            </p>\n\n            <ion-item>\n              <ion-label color="stackedTitle" stacked>{{ \'PASSWORD\' | translate }} :</ion-label>\n              <ion-input class="password" formControlName="password" type="password" placeholder="{{ \'PASSWORD\' | translate }}" #b tabindex="2"></ion-input>\n            </ion-item>\n\n\n\n            <p ion-text class="custom-validation" [hidden]="!submitted || userData.controls.password.valid" color="danger" padding-left>\n              {{\'ERROR_PASSWORD\' | translate}}\n            </p>\n            <p class="forgotPass" (click)="forgotPassword()">{{ \'FORGOT\' | translate }}</p>\n            <button type="button" class="submit-btn" ion-button full (click)="signIn()">{{ \'SIGN_IN\' | translate }}</button>\n            <p class="mg-b-10" no-margin text-center>\n              <label>{{ \'SIGN_IN_WITH_SOCIAL\' | translate }}</label>\n            </p>\n            <a href="#" class="btn-success social-icons" (click)="facebook()">\n              <img src="assets/imgs/fb.png" alt="" /> {{ \'LOGIN_WITH_FACEBOOK\' | translate }}</a>\n            <a href="#" class="btn-success google social-icons" (click)="googleLogin()">\n              <img src="assets/imgs/g_plus.png" alt="" /> {{ \'LOGIN_WITH_GOOGLE\' | translate }}</a>\n            <p class="mg-b-10 anchor-tag" no-margin text-center>\n              <label text-center>{{ \'DO_NOT_HAVE_ACCOUNT\' | translate }}\n                <a (click)="signUp()">{{ \'SIGN_UP\' | translate }}</a>\n              </label>\n            </p>\n          </form>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </section>\n</ion-content>'/*ion-inline-end:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_5__providers_utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_7__providers_user_email_service_user_email_service__["a" /* UserEmailServiceProvider */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__terms_screen_terms_screen__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utility_utility__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_service_user_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_email_service_user_email_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_validation_service_validation_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_app_version__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, formBuilder, utilityService, userAPIService, fb, googlePlus, event, userEmailService, platform, appVersion) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.utilityService = utilityService;
        this.userAPIService = userAPIService;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.event = event;
        this.userEmailService = userEmailService;
        this.platform = platform;
        this.appVersion = appVersion;
        this.isPassword = true;
        this.status = false;
        this.iscPassword = true;
        this.cStatus = false;
        this.submitted = false;
        this.mask = [0, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.version = '1.0';
        this.showPassword = function () {
            _this.isPassword = !_this.isPassword;
            _this.status = !_this.status;
        };
        this.showcPassword = function () {
            _this.iscPassword = !_this.iscPassword;
            _this.cStatus = !_this.cStatus;
        };
        platform.ready().then(function () {
            _this.appVersion.getVersionNumber().then(function (res) {
                _this.version = res;
            });
        });
        this.userData = this.formBuilder.group({
            fName: [''],
            lName: [''],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_9__providers_validation_service_validation_service__["a" /* ValidationService */].emailValidator])],
            number: [''],
            cPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    }
    SignupPage.prototype.ionViewWillEnter = function () {
        this.event.publish('trackView', 'On SignUp');
    };
    SignupPage.prototype.ionViewDidLoad = function () {
    };
    SignupPage.prototype.signIn = function () {
        this.navCtrl.pop();
    };
    SignupPage.prototype.signUp = function () {
        var _this = this;
        this.submitted = true;
        if (!this.userData.get('email').valid) {
            // this.utilityService.presentToast('ERROR_VALID_EMAIL', true);
        }
        else if (!this.userData.get('password').valid) {
            // this.utilityService.presentToast('ERROR_PASSWORD', true);
        }
        else if (this.userData.get('password').value.length < 6) {
            // this.utilityService.presentToast('ERROR_PASSWORD_LENGHT', true);
        }
        else if (!this.utilityService.hasLowerCase(this.userData.get('password').value)) {
            // this.utilityService.presentToast('ERROR_PASSWORD_SMALL', true);
        }
        else if (!this.utilityService.hasUpperCase(this.userData.get('password').value)) {
            // this.utilityService.presentToast('ERROR_PASSWORD_CAPITAL', true);
        }
        else if (!this.userData.get('cPassword').valid) {
            // this.utilityService.presentToast('ERROR_CONFIRM_PASSWORD', true);
        }
        else if (this.userData.get('cPassword').value != this.userData.get('password').value) {
            // this.utilityService.presentToast('ERROR_PASSWORD_CONFIRM_PASSWORD', true);
        }
        else {
            this.submitted = false;
            var userRequest_1 = {
                "firstName": this.userData.get('fName').value ? this.userData.get('fName').value : undefined,
                "lastName": this.userData.get('lName').value ? this.userData.get('lName').value : undefined,
                "password": this.userData.get('password').value,
                "phone": this.userData.get('number').value ? this.userData.get('number').value : undefined,
                "email": this.userData.get('email').value,
                "loginType": 'Email'
            };
            this.userAPIService.registerUser(userRequest_1).then(function (res) {
                if (res['msg']) {
                    _this.utilityService.showAlert(res['msg']);
                    _this.navCtrl.pop();
                }
                else {
                    _this.userEmailService.isFromSignup = true;
                    _this.event.publish('emailExists', { email: _this.userData.get('email').value, userData: userRequest_1 });
                }
            }).catch(function (error) {
                if (error['error']['error']) {
                    _this.utilityService.showAlert(error['error']['error']);
                }
            });
        }
    };
    SignupPage.prototype.facebook = function () {
        var _this = this;
        this.fb.logout().then(function (res) {
        }).catch(function (error) {
        });
        this.fb.login(['public_profile', 'email', 'user_friends']).then(function (success) {
            console.log(success);
            _this.fb.api('me?fields=id,first_name,last_name,email,picture.width(720).height(720).as(picture_large)', ['public_profile']).then(function (profile_data) {
                console.log('profile_data', profile_data);
                // let provider = 'facebook';
                var profile = {};
                profile.emails = [{ type: 'account', value: profile_data.email }];
                profile._json = profile_data;
                var profileData = {
                    "lastName": profile_data['last_name'],
                    "firstName": profile_data['first_name'],
                    "profilePic": profile_data['picture_large']['data']['url'],
                    "email": profile_data['email'],
                    "id": profile_data['id']
                };
                var socialInfo = {
                    "accessToken": success.authResponse.accessToken,
                    "id": profile_data['id'],
                    "profile": profileData
                };
                var userRequestData = {
                    "provider": "Facebook",
                    "lastName": profile_data['last_name'],
                    "firstName": profile_data['first_name'],
                    "profilePic": profile_data['picture_large']['data']['url'],
                    "socialInfo": socialInfo,
                    platform: _this.platform.is('ios') ? 'iOS' : 'Android',
                    deviceToken: window.localStorage.getItem('DeviceToken'),
                    version: _this.version
                };
                _this.userAPIService.socialLoginUser(userRequestData).then(function (res) {
                    console.log(res);
                    if ('multiple' in res && res['multiple']) {
                        _this.userEmailService.isFromSignup = false;
                        window.localStorage.removeItem('noEmailFound');
                        _this.event.publish('emailExists', { email: profile_data['email'], userData: userRequestData });
                    }
                    else {
                        if (profile_data['email']) {
                            window.localStorage.removeItem('noEmailFound');
                            _this.event.publish('loggedIn');
                        }
                        else {
                            _this.event.publish('emailExists', { email: profile_data['email'], userData: userRequestData });
                        }
                    }
                }).catch(function (error) {
                    var msg = error.error;
                    console.log(error);
                    if (msg.error) {
                        _this.utilityService.showAlert(msg.error);
                    }
                });
            }, function (error_profile) {
                console.log(error_profile);
                // loading.dismissAll();
            });
        }).catch(function (e) { console.log('Error logging into Facebook', e); });
    };
    SignupPage.prototype.googleLogin = function () {
        var _this = this;
        this.googlePlus.logout().then(function (res) {
        }).catch(function (err) {
        });
        // 'webClientId': "268170607060-8ul2up810gap06oil5cjaku686pujqbo.apps.googleusercontent.com" Production
        // 'webClientId': "26192727788-jcvo0647356hg6uadj7i9r952epjebps.apps.googleusercontent.com" Staging
        this.googlePlus.login({
            'webClientId': "268170607060-8ul2up810gap06oil5cjaku686pujqbo.apps.googleusercontent.com"
        }).then(function (res) {
            var profileData = {
                "lastName": res['familyName'],
                "firstName": res['givenName'],
                "profilePic": res['imageUrl'],
                "email": res['email'],
                "id": res['userId']
            };
            var socialInfo = {
                "accessToken": res['idToken'],
                "id": res['userId'],
                "profile": profileData
            };
            var userRequestData = {
                "provider": "Google",
                "lastName": res['familyName'],
                "firstName": res['givenName'],
                "profilePic": res['imageUrl'],
                "socialInfo": socialInfo,
                platform: _this.platform.is('ios') ? 'iOS' : 'Android',
                deviceToken: window.localStorage.getItem('DeviceToken'),
                version: _this.version
            };
            _this.userAPIService.socialLoginUser(userRequestData).then(function (ress) {
                if ('multiple' in ress && ress['multiple']) {
                    _this.userEmailService.isFromSignup = false;
                    window.localStorage.removeItem('noEmailFound');
                    _this.event.publish('emailExists', { email: res['email'], userData: userRequestData });
                }
                else {
                    window.localStorage.removeItem('noEmailFound');
                    _this.event.publish('loggedIn');
                }
            }).catch(function (error) {
                var msg = error.error;
                if (msg.error) {
                    _this.utilityService.showAlert(msg.error);
                }
            });
        }).catch(function (err) {
            console.error("err", err);
        });
    };
    SignupPage.prototype.passwordType = function () {
        return this.isPassword ? 'password' : 'text';
    };
    SignupPage.prototype.cPasswordType = function () {
        return this.iscPassword ? 'password' : 'text';
    };
    SignupPage.prototype.termsData = function (url) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__terms_screen_terms_screen__["a" /* TermsScreenPage */], { url: url });
    };
    SignupPage.prototype.moveFocus = function (event, nextElement) {
        if (event.code == 'Enter') {
            nextElement.setFocus();
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/signup/signup.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'SIGN_UP\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="signup" class="social-screen">\n  <section id="header">\n    <div class="container">\n      <ion-grid>\n        <ion-row>\n          <img src="assets/imgs/banner.jpg" class="bannerImg">\n          <!-- <h2>{{ \'LOGO_NAME\' | translate }}</h2>\n            <h3>{{ \'SIGN_UP\' | translate }}</h3> -->\n        </ion-row>\n      </ion-grid>\n    </div>\n  </section>\n  <section id="content">\n    <div class="container">\n      <ion-grid no-padding>\n        <ion-row>\n          <form [formGroup]="userData">\n            <!-- <ion-input formControlName="lName" type="text" placeholder="{{ \'YOUR_FAMILY_NAME\' | translate }}" tabindex="1" (keyup)="moveFocus($event,b)"></ion-input>\n            <ion-input formControlName="fName" type="text" placeholder="{{ \'YOUR_FIRST_NAME\' | translate }}" #b tabindex="2" (keyup)="moveFocus($event,c)"></ion-input> -->\n\n            <ion-item>\n              <ion-label color="stackedTitle" stacked>{{ \'EMAIL\' | translate }} :</ion-label>\n              <ion-input formControlName="email" type="email" placeholder="{{ \'EMAIL\' | translate }}" #c tabindex="3" (keyup)="moveFocus($event,d)"></ion-input>\n            </ion-item>\n\n\n            <p ion-text class="custom-validation" [hidden]="!submitted || userData.controls.email.valid" color="danger" padding-left>\n              {{\'ERROR_VALID_EMAIL\' | translate}}\n            </p>\n            <!-- <input type="tel" [textMask]="{mask: mask,guide:false}" ng-pattern="/^([0-9]*)$/" formControlName="number" placeholder="{{ \'PHONE_NUMBER\' | translate }}"\n            /> -->\n            <div class="signup-password-main">\n              <ion-label color="stackedTitle" stacked>{{ \'PASSWORD\' | translate }} :</ion-label>\n\n              <ion-label class="password-display">\n                <ion-input formControlName="password" class="password" [type]=passwordType() maxLength="30" placeholder="{{ \'PASSWORD\' | translate }}"\n                  #d tabindex="4" (keyup)="moveFocus($event,e)"></ion-input>\n                <ion-icon class="showingPassword" (click)="showPassword()" name="eye" [ngClass]="status ? \'success\' : \'\'"></ion-icon>\n              </ion-label>\n            </div>\n\n            <p ion-text class="custom-validation" [hidden]="!submitted || userData.controls.password.valid" color="danger" padding-left>\n              {{\'ERROR_PASSWORD\' | translate}}\n            </p>\n            <p ion-text class="custom-validation" [hidden]="!submitted || !userData.controls.password.valid || utilityService.hasLowerCase(userData.get(\'password\').value)"\n              color="danger" padding-left>\n              {{\'ERROR_PASSWORD_SMALL\' | translate}}\n            </p>\n            <p ion-text class="custom-validation" [hidden]="!submitted || !userData.controls.password.valid || utilityService.hasUpperCase(userData.get(\'password\').value)"\n              color="danger" padding-left>\n              {{\'ERROR_PASSWORD_CAPITAL\' | translate}}\n            </p>\n            <div class="signup-password-main">\n              <ion-label color="stackedTitle" stacked>{{ \'CONFIR_PASSWORD\' | translate }} :</ion-label>\n              <ion-label class="password-display">\n                <ion-input formControlName="cPassword" class="password" [type]=cPasswordType() maxLength="30" placeholder="{{ \'CONFIR_PASSWORD\' | translate }}"\n                  #e tabindex="5"></ion-input>\n                <ion-icon class="showingPassword" (click)="showcPassword()" name="eye" [ngClass]="cStatus ? \'success\' : \'\'"></ion-icon>\n              </ion-label>\n            </div>\n\n            <p ion-text class="custom-validation" [hidden]="!submitted || userData.controls.cPassword.valid" color="danger" padding-left>\n              {{\'ERROR_CONFIRM_PASSWORD\' | translate}}\n            </p>\n            <p ion-text class="custom-validation" [hidden]="!submitted || userData.get(\'cPassword\').value == userData.get(\'password\').value"\n              color="danger" padding-left> {{\'ERROR_PASSWORD_CONFIRM_PASSWORD\' | translate}}\n            </p>\n            <button class="submit-btn" type="button" ion-button full (click)="signUp()">{{ \'CREATE_ACCOUNT\' | translate }}</button>\n            <p class="mg-b-10" no-margin text-center>\n              <label>{{ \'SIGN_IN_WITH_SOCIAL\' | translate }}</label>\n            </p>\n            <a href="#" class="btn-success social-icons" (click)="facebook()">\n              <img src="assets/imgs/fb.png" alt="" /> {{ \'LOGIN_WITH_FACEBOOK\' | translate }}</a>\n            <a href="#" class="btn-success google social-icons" (click)="googleLogin()">\n              <img src="assets/imgs/g_plus.png" alt="" /> {{ \'LOGIN_WITH_GOOGLE\' | translate }}</a>\n            <p class="mg-b-10 anchor-tag" no-margin text-center>\n              <label text-center>{{ \'ALREADY_HAVE_ACCOUNT\' | translate }}\n                <a (click)="signIn()">{{ \'SIGN_IN\' | translate }}</a>\n              </label>\n            </p>\n            <p class="teamsSection">\n              {{ \'BY_SIGNING_WITH_IBEED_AGREEING\' | translate }}\n              <br/>\n              <a (click)="termsData(\'static/terms-of-use\')">{{ \'TERMS_CONDITIONS\' | translate }}</a> &amp;\n              <!-- <a (click)="termsData(\'static/security-policy\')">{{ \'SECURITY_POLICY\' | translate }}</a> and -->\n              <a (click)="termsData(\'static/privacy-policy\')">{{ \'PRIVACY_POLICY\' | translate }}</a>.\n            </p>\n          </form>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </section>\n</ion-content>'/*ion-inline-end:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_6__providers_utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_8__providers_user_email_service_user_email_service__["a" /* UserEmailServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_10__ionic_native_app_version__["a" /* AppVersion */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsScreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_service_common_service__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TermsScreenPage = /** @class */ (function () {
    function TermsScreenPage(navCtrl, navParams, commonServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonServiceProvider = commonServiceProvider;
        this.privacyData = [];
        this.resHtmlData = null;
        this.URLName = this.navParams.get('url');
        console.log(this.URLName);
        var titles = this.URLName.split('/');
        this.title = titles[1];
        if (this.title == 'terms-of-use') {
            this.header = "Terms Screen";
        }
        else if (this.title == 'security-policy') {
            this.header = "Security Policy";
        }
        else if (this.title == 'privacy-policy') {
            this.header = "Privacy Policy";
        }
    }
    TermsScreenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsScreenPage');
    };
    TermsScreenPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.commonServiceProvider.privacyScreen(this.URLName).then(function (res) {
            console.log("res", res);
            _this.resHtmlData = res['content'];
        }).catch(function (error) {
            // this.utilityService.presentToast(error['error']['error'], false);
            console.log("error", error);
        });
    };
    TermsScreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-terms-screen',template:/*ion-inline-start:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/terms-screen/terms-screen.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{header}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content id="terms" no-padding>\n    <div [innerHTML]="resHtmlData"></div>\n</ion-content>\n'/*ion-inline-end:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/terms-screen/terms-screen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_common_service_common_service__["a" /* CommonServiceProvider */]])
    ], TermsScreenPage);
    return TermsScreenPage;
}());

//# sourceMappingURL=terms-screen.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_validation_service_validation_service__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navCtrl, navParams, userAPIService, utility, formBuilder, event) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userAPIService = userAPIService;
        this.utility = utility;
        this.formBuilder = formBuilder;
        this.event = event;
        this.submitted = false;
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__providers_validation_service_validation_service__["a" /* ValidationService */].emailValidator])],
        });
    }
    ForgotPasswordPage.prototype.ionViewWillEnter = function () {
        this.event.publish('trackView', 'On Forgot Password');
    };
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
    };
    ForgotPasswordPage.prototype.sendRecoveryLink = function () {
        var _this = this;
        this.submitted = true;
        if (!this.forgotPasswordForm.get('email').valid) {
            // this.utility.presentToast('ERROR_VALID_EMAIL', true);
        }
        else {
            this.submitted = false;
            this.userAPIService.forgotPassword(this.forgotPasswordForm.get('email').value).then(function (res) {
                _this.utility.showAlert(res['msg']);
                _this.navCtrl.pop();
            }).catch(function (error) {
                var tmpDic = error.error;
                console.log(tmpDic);
                _this.utility.showAlert(tmpDic.error);
            });
        }
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/forgot-password/forgot-password.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'FORGOT_PASSWORD\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="login" class="social-screen">\n  <section id="header">\n    <div class="container">\n      <ion-grid>\n        <ion-row>\n          <img src="assets/imgs/banner.jpg" class="bannerImg">\n          <!-- <h2>{{ \'LOGO_NAME\' | translate }}</h2>\n            <h3>{{ \'FORGOT_PASSWORD\' | translate }}</h3> -->\n        </ion-row>\n      </ion-grid>\n    </div>\n  </section>\n  <section id="content">\n    <div class="container">\n      <ion-grid no-padding>\n        <ion-row>\n          <form [formGroup]="forgotPasswordForm">\n            <ion-item>\n              <ion-label color="stackedTitle" stacked>{{ \'EMAIL\' | translate }} :</ion-label>\n              <ion-input type="email" placeholder="{{ \'EMAIL\' | translate }}" formControlName="email"></ion-input>\n            </ion-item>\n\n\n            <p ion-text class="custom-validation" [hidden]="!submitted || forgotPasswordForm.controls.email.valid" color="danger">\n              {{\'ERROR_VALID_EMAIL\' | translate}}\n            </p>\n            <button class="submit-btn" ion-button full (click)="sendRecoveryLink()">{{ \'SEND\' | translate }}</button>\n          </form>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </section>\n</ion-content>'/*ion-inline-end:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/forgot-password/forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkthroughPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WalkthroughPage = /** @class */ (function () {
    function WalkthroughPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.walkThroughScreens = ['assets/imgs/1.png', 'assets/imgs/2.png', 'assets/imgs/3.png', 'assets/imgs/4.png', 'assets/imgs/5.png', 'assets/imgs/6.png', 'assets/imgs/7.png'];
        this.walkThroughScreensTitle = [
            '自分のプロフィールを登録します',
            '家族を登録します',
            '保険証券を手元に準備します',
            '一覧画面から保険情報を登録します',
            '保険証券の詳細情報を登録します',
            '受取人情報を登録します',
            '登録完了です！'
        ];
        this.walkThroughScreensText = [
            '設定画面で、氏名、電話番号、住所などの自分のプロフィールを登録します。',
            '設定画面で、家族を登録します。',
            'ご自身が加入している保険証券を準備します。',
            '一覧画面で、保険を追加します。',
            '保険会社、商品情報などの保険証券情報を登録します。この際に保険証券画像もアップロードします',
            '保険金の受取人情報を登録します。受取人は、自分または登録した家族から選択できます。',
            '一覧画面から登録完了した保険証券情報を参照できるようになります。'
        ];
        window.localStorage.setItem('isWalkThorghComplete', 'false');
    }
    WalkthroughPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalkthroughPage');
    };
    WalkthroughPage.prototype.goToHome = function () {
        window.localStorage.removeItem('isWalkThorghComplete');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__["a" /* TabsPage */], { moveToSetting: true });
    };
    WalkthroughPage.prototype.slideChanged = function (event) {
        if (this.slides._activeIndex == this.walkThroughScreens.length && this.slides.swipeDirection == 'next') {
            this.slides.slideTo(this.walkThroughScreens.length - 1, 0.5);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"])
    ], WalkthroughPage.prototype, "slides", void 0);
    WalkthroughPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-walkthrough',template:/*ion-inline-start:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/walkthrough/walkthrough.html"*/'<ion-content padding>\n  <ion-slides pager="true" (ionSlideWillChange)="slideChanged($event)">\n    <ion-slide *ngFor="let image of walkThroughScreens; let indx = index">\n      <ion-row class="walkThroughImage">\n        <ion-col class="walkThroughScreens">\n          <img [src]="image" [ngClass]="indx == 2 ?\'small\': \'\'" />\n        </ion-col>\n      </ion-row>\n      <ion-row class="walkThroughDis">\n        <ion-col class="walkThroughScreens">\n          <label style="font-weight: bold;float: left;">\n            {{walkThroughScreensTitle[indx]}}\n          </label>\n        </ion-col>\n      </ion-row>\n      <ion-row class="walkThroughContent">\n        <ion-col class="walkThroughScreens">\n          <label style="text-align: justify;float: left;">\n            {{walkThroughScreensText[indx]}}\n          </label>\n        </ion-col>\n      </ion-row>\n    </ion-slide>\n  </ion-slides>\n  <button ion-button class="skip" color="light" (click)="goToHome()">Skip</button>\n</ion-content>'/*ion-inline-end:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/walkthrough/walkthrough.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], WalkthroughPage);
    return WalkthroughPage;
}());

//# sourceMappingURL=walkthrough.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseAnalyticsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase_analytics__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseAnalyticsProvider = /** @class */ (function () {
    function FirebaseAnalyticsProvider(firebaseAnalytics) {
        this.firebaseAnalytics = firebaseAnalytics;
        if (this.firebaseAnalytics) {
            this.firebaseAnalytics.setEnabled(true);
        }
    }
    FirebaseAnalyticsProvider.prototype.logPageViewEvent = function (pageName) {
        this.firebaseAnalytics.logEvent('page_view', { page: pageName }).then(function (res) {
            console.log('res', res);
        }).catch(function (error) {
            console.error('error', error);
        });
    };
    FirebaseAnalyticsProvider.prototype.setScreen = function (pageName) {
        this.firebaseAnalytics.setCurrentScreen(pageName).then(function (res) {
            console.log('res', res);
        }).catch(function (error) {
            console.error('error', error);
        });
    };
    FirebaseAnalyticsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */]])
    ], FirebaseAnalyticsProvider);
    return FirebaseAnalyticsProvider;
}());

//# sourceMappingURL=firebase-analytics.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(306);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sim__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signin_signin__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_management_management__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_faq_faq__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_faq_questions_faq_questions__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_faq_details_faq_details__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_insurance_management_insurance_management__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_insurance_detail_insurance_detail__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_beneficiary_beneficiary__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_forgot_password_forgot_password__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_terms_screen_terms_screen__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_share_policy_share_policy__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_walkthrough_walkthrough__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_notifications_notifications__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_family_share_family_share__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pipes_search_search__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_file_transfer__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_camera__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_file_chooser__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ionic_select_searchable__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_facebook__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_google_plus__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ngx_translate_http_loader__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_date_picker__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_app_version__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_push__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_email_composer__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_badge__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_keyboard__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_ionic_img_viewer__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_firebase_analytics__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_ionic_tags_input__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_utility_utility__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_api_service_api_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_config_service_config_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_insurance_service_insurance_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_user_service_user_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_auth_service_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__providers_validation_service_validation_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_common_service_common_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_firebase_analytics_firebase_analytics__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_notification_service_notification_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_user_email_service_user_email_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__components_Settings_settings_module__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__components_Dashboard_dashboard_module__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60_angular2_text_mask__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_60_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__angular_http__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62_text_mask_addons_dist_createNumberMask__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62_text_mask_addons_dist_createNumberMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_62_text_mask_addons_dist_createNumberMask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//Page imports


















//Plugin Imports
























//Provider Imports











//Component imports


//Third party



function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_37__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_management_management__["a" /* ManagementPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_insurance_management_insurance_management__["a" /* InsuranceManagementPage */],
                __WEBPACK_IMPORTED_MODULE_26__pipes_search_search__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_16__pages_insurance_detail_insurance_detail__["a" /* InsuranceDetailPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_beneficiary_beneficiary__["a" /* BeneficiaryPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_terms_screen_terms_screen__["a" /* TermsScreenPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_faq_questions_faq_questions__["a" /* FaqQuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_faq_details_faq_details__["a" /* FaqDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_share_policy_share_policy__["a" /* SharePolicyPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_walkthrough_walkthrough__["a" /* WalkthroughPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_family_share_family_share__["a" /* FamilySharePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_61__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_31_ionic_select_searchable__["SelectSearchableModule"],
                __WEBPACK_IMPORTED_MODULE_58__components_Settings_settings_module__["a" /* SettingsModule */],
                __WEBPACK_IMPORTED_MODULE_59__components_Dashboard_dashboard_module__["a" /* DashboardModule */],
                __WEBPACK_IMPORTED_MODULE_36__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_36__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_32__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_60_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_44_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_46_ionic_tags_input__["a" /* IonTagsInputModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_management_management__["a" /* ManagementPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_faq_faq__["a" /* FaqPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_insurance_management_insurance_management__["a" /* InsuranceManagementPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_insurance_detail_insurance_detail__["a" /* InsuranceDetailPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_beneficiary_beneficiary__["a" /* BeneficiaryPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_terms_screen_terms_screen__["a" /* TermsScreenPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_faq_questions_faq_questions__["a" /* FaqQuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_faq_details_faq_details__["a" /* FaqDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_share_policy_share_policy__["a" /* SharePolicyPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_walkthrough_walkthrough__["a" /* WalkthroughPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_family_share_family_share__["a" /* FamilySharePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_47__providers_utility_utility__["a" /* UtilityProvider */],
                __WEBPACK_IMPORTED_MODULE_48__providers_api_service_api_service__["a" /* ApiServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_49__providers_config_service_config_service__["a" /* ConfigServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_50__providers_insurance_service_insurance_service__["a" /* InsuranceServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_33__angular_common__["DatePipe"],
                __WEBPACK_IMPORTED_MODULE_51__providers_user_service_user_service__["a" /* UserServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_51__providers_user_service_user_service__["a" /* UserServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_52__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_53__providers_validation_service_validation_service__["a" /* ValidationService */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_sim__["a" /* Sim */],
                __WEBPACK_IMPORTED_MODULE_54__providers_common_service_common_service__["a" /* CommonServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_62_text_mask_addons_dist_createNumberMask___default.a,
                __WEBPACK_IMPORTED_MODULE_33__angular_common__["CurrencyPipe"],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */],
                __WEBPACK_IMPORTED_MODULE_55__providers_firebase_analytics_firebase_analytics__["a" /* FirebaseAnalyticsProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_56__providers_notification_service_notification_service__["a" /* NotificationServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_badge__["a" /* Badge */],
                __WEBPACK_IMPORTED_MODULE_57__providers_user_email_service_user_email_service__["a" /* UserEmailServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var ENV = {
    env: 'prod',
    APP_URL: "https://api.ichain.love/api/v1.1/",
    GOOGLE_KEY: 'AIzaSyBv4dZXW8bS2HUHi2IJIjszx2PT3lcTE1Y'
};
//# sourceMappingURL=environment.prod.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_walkthrough_walkthrough__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_push__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_firebase_analytics_firebase_analytics__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_user_service_user_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_user_email_service_user_email_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_utility_utility__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_app_version__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth, event, translate, userAPI, fireBaseAnalytics, push, util, userEmailService, appVersion) {
        var _this = this;
        this.platform = platform;
        this.auth = auth;
        this.event = event;
        this.translate = translate;
        this.userAPI = userAPI;
        this.fireBaseAnalytics = fireBaseAnalytics;
        this.push = push;
        this.util = util;
        this.userEmailService = userEmailService;
        this.appVersion = appVersion;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__["a" /* SigninPage */];
        this.alreadyLogged = true;
        this.version = '1.0';
        platform.ready().then(function () {
            _this.appVersion.getVersionNumber().then(function (res) {
                console.log('res', res);
                _this.version = res;
            });
            _this.initPushNotification();
            // var crashlytics = FirebaseCrashlytics.initialise();
            // crashlytics.crash();
            var isWalkThorghComplete = auth.getLocalStore('isWalkThorghComplete');
            if (isWalkThorghComplete) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_walkthrough_walkthrough__["a" /* WalkthroughPage */];
            }
            else {
                var isLoggedUser = auth.getLocalStore('isUserLogged');
                if (isLoggedUser == 'true') {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
                    var loggedUser = JSON.parse(_this.auth.getLocalStore('LoggedUser'));
                    console.log('loggedUser', loggedUser);
                }
            }
            _this.checkMigrationFinished();
            _this.updateLastActiveTime();
            window.addEventListener('keyboardWillHide', function () {
                document.body.classList.remove('keyboard-is-open');
                document.body.classList.add('keyboard-is-close');
            });
            window.addEventListener('keyboardWillShow', function (ev) {
                document.body.classList.add('keyboard-is-open');
                document.body.classList.remove('keyboard-is-close');
            });
            setTimeout(function () {
                splashScreen.hide();
            }, 1000);
            _this.event.subscribe('trackView', function (res) {
                _this.fireBaseAnalytics.logPageViewEvent(res);
            });
        });
        var currentObj = this;
        currentObj.event.unsubscribe('logout');
        currentObj.event.subscribe('logout', function (res) {
            _this.fireBaseAnalytics.logPageViewEvent('User logged out');
            currentObj.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__["a" /* SigninPage */];
        });
        currentObj.event.unsubscribe('checkDuplicateMail');
        currentObj.event.subscribe('checkDuplicateMail', function (res) {
            var loggedUser = JSON.parse(_this.auth.getLocalStore('LoggedUser'));
            currentObj.userEmailService.checkMigrationLink(loggedUser);
        });
        currentObj.event.unsubscribe('loggedIn');
        currentObj.event.subscribe('loggedIn', function (res) {
            _this.fireBaseAnalytics.logPageViewEvent('User logged In');
            currentObj.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        });
        currentObj.event.unsubscribe('walkThrough');
        currentObj.event.subscribe('walkThrough', function (res) {
            currentObj.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_walkthrough_walkthrough__["a" /* WalkthroughPage */];
        });
        currentObj.event.unsubscribe('emailExists');
        currentObj.event.subscribe('emailExists', function (res) {
            _this.alreadyLogged = false;
            _this.userEmailService.socialUser = res['userData'];
            console.log('emailExists', res);
            if ('email' in res && res['email'] && res['email'] != '') {
                currentObj.userEmailService.existingEmailAlert(res['email'], true);
            }
            else {
                currentObj.userEmailService.emailForSocial(res['email']);
            }
        });
        var tmpLangugageList = navigator.language.split("-");
        var languageCode = tmpLangugageList[0].toLowerCase();
        if (languageCode == 'en' || languageCode == 'ja') {
            this.auth.langCode = languageCode;
            translate.setDefaultLang(languageCode);
            translate.use(languageCode);
        }
        else {
            translate.setDefaultLang('en');
            translate.use('en');
        }
        platform.resume.subscribe(function () {
            _this.updateLastActiveTime();
            _this.event.publish('updateNotifications');
            _this.checkMigrationFinished();
        });
    }
    MyApp.prototype.updateLastActiveTime = function () {
        this.userAPI.updateLastActiveTime().then(function (res) {
        }).catch(function (error) {
        });
    };
    MyApp.prototype.initPushNotification = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
            return;
        }
        var options = {
            android: {
                clearBadge: false,
                senderID: '390981059844'
            }, ios: {
                alert: true,
                badge: true,
                sound: true,
                clearBadge: false,
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('registration').subscribe(function (data) {
            console.log('device token -> ' + data.registrationId);
            window.localStorage.setItem('DeviceToken', data.registrationId);
            //TODO - send device token to server
            var isLoggedUser = _this.auth.getLocalStore('isUserLogged');
            if (isLoggedUser == 'true') {
                var deviceData = {
                    platform: _this.platform.is('ios') ? 'iOS' : 'Android',
                    deviceToken: window.localStorage.getItem('DeviceToken'),
                    version: _this.version
                };
                console.log('deviceData', deviceData);
                _this.userAPI.updateDeviceToken(deviceData).then(function (res) {
                }).catch(function (error) {
                    console.log('Erroe in registration', error);
                });
            }
        });
        pushObject.on('notification').subscribe(function (data) {
            console.log('message -> ' + data.message);
            //if user using app and push notification comes
            if (data.additionalData.foreground) {
                // if application open, show popup
            }
            else {
                //if user NOT using app and push notification comes
                //TODO: Your logic on click of push notification directly
                console.log('Push notification clicked');
            }
        });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin' + error); });
    };
    MyApp.prototype.checkMigrationFinished = function () {
        var _this = this;
        this.userAPI.migrationFinished().then(function (res) {
            if ('flag' in res && res['flag'] == 1) {
                _this.userEmailService.closeEmailAlert();
                _this.translate.get('ACOOUNT_MERGED').subscribe(function (value) {
                    _this.util.showAlert(value);
                });
                _this.userAPI.getProfile().then(function (res) {
                }).catch(function (error) {
                });
            }
        }).catch(function (error) {
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/SA_Project/Project/iBeed/SourceCode_ionic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/SA_Project/Project/iBeed/SourceCode_ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_11__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_firebase_analytics_firebase_analytics__["a" /* FirebaseAnalyticsProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_13__providers_utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_12__providers_user_email_service_user_email_service__["a" /* UserEmailServiceProvider */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_app_version__["a" /* AppVersion */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManagementPage = /** @class */ (function () {
    function ManagementPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ManagementPage.prototype.ionViewDidLoad = function () {
    };
    ManagementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-management',template:/*ion-inline-start:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/management/management.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Management</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/SA_Project/Project/iBeed/SourceCode_ionic/src/pages/management/management.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ManagementPage);
    return ManagementPage;
}());

//# sourceMappingURL=management.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SearchPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(function (it) {
            return it.name.toLowerCase().includes(terms); // only filter country name
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'search',
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_detail_personal_detail__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__address_detail_address_detail__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__family_detail_family_detail__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Angular 4 Module Imports





//Discover Component Imports





function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__personal_detail_personal_detail__["a" /* PersonalDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_6__address_detail_address_detail__["a" /* AddressDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_7__family_detail_family_detail__["a" /* FamilyDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_5__personal_detail_personal_detail__["a" /* PersonalDetailComponent */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_6__address_detail_address_detail__["a" /* AddressDetailComponent */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_7__family_detail_family_detail__["a" /* FamilyDetailComponent */]),
                __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__personal_detail_personal_detail__["a" /* PersonalDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_6__address_detail_address_detail__["a" /* AddressDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_7__family_detail_family_detail__["a" /* FamilyDetailComponent */]
            ],
        })
    ], SettingsModule);
    return SettingsModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonalDetailComponent = /** @class */ (function () {
    function PersonalDetailComponent(formBuilder, utilityService, userAPIService, event) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.utilityService = utilityService;
        this.userAPIService = userAPIService;
        this.event = event;
        this.showPasswordChange = false;
        this.submitted = false;
        console.log('isSocialLogin', this.isSocialLogin);
        setTimeout(function () {
            _this.personalDetail = _this.formBuilder.group({
                fName: [_this.fName],
                lName: [_this.lName],
                email: [_this.email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                phNumber: [_this.phNumber],
                faxNumber: [_this.faxNumber, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                newPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            });
        }, 50);
        this.event.unsubscribe('resetFromPersonalDetail');
        this.event.subscribe('resetFromPersonalDetail', function (res) {
            _this.submitted = false;
            _this.personalDetail = _this.formBuilder.group({
                fName: [_this.fName],
                lName: [_this.lName],
                email: [_this.email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                phNumber: [_this.phNumber],
                faxNumber: [_this.faxNumber, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                newPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            });
        });
    }
    PersonalDetailComponent.prototype.showPassword = function () {
        this.showPasswordChange = !this.showPasswordChange;
    };
    PersonalDetailComponent.prototype.editProfile = function () {
        var _this = this;
        this.submitted = true;
        if (!this.personalDetail.get('fName').valid) {
            // this.utilityService.presentToast('ERROR_FIRST_NAME', true);
        }
        else if (!this.personalDetail.get('lName').valid) {
            // this.utilityService.presentToast('ERROR_LAST_NAME', true);
        }
        else if (!this.personalDetail.get('email').valid) {
            // this.utilityService.presentToast('ERROR_EMAIL', true);
        }
        else if (!this.personalDetail.get('phNumber').valid) {
            // this.utilityService.presentToast('ERROR_PH_NUMBER', true);
        }
        else if (this.showPasswordChange && !this.personalDetail.get('password').valid) {
            // this.utilityService.presentToast('ERROR_PASSWORD', true);
        }
        else if (this.showPasswordChange && !this.personalDetail.get('newPassword').valid) {
            // this.utilityService.presentToast('ERROR_NEW_PASSWORD', true);
        }
        else if (this.showPasswordChange && this.personalDetail.get('newPassword').value.length < 6) {
            // this.utilityService.presentToast('ERROR_NEW_PASSWORD_LENGHT', true);
        }
        else if (this.showPasswordChange && !this.utilityService.hasLowerCase(this.personalDetail.get('newPassword').value)) {
            // this.utilityService.presentToast('ERROR_NEW_PASSWORD_SMALL', true);
        }
        else if (this.showPasswordChange && !this.utilityService.hasUpperCase(this.personalDetail.get('newPassword').value)) {
            // this.utilityService.presentToast('ERROR_NEW_PASSWORD_CAPITAL', true);
        }
        else {
            this.submitted = false;
            var updateProfileData = {
                email: this.personalDetail.get('email').value,
                image: this.profilePic,
            };
            if (this.personalDetail.get('fName').value && this.personalDetail.get('fName').value != "") {
                updateProfileData['firstName'] = this.personalDetail.get('fName').value;
            }
            if (this.personalDetail.get('lName').value && this.personalDetail.get('lName').value != "") {
                updateProfileData['lastName'] = this.personalDetail.get('lName').value;
            }
            if (this.personalDetail.get('phNumber').value && this.personalDetail.get('phNumber').value != "") {
                updateProfileData['phone'] = this.personalDetail.get('phNumber').value;
            }
            if (this.personalDetail.get('faxNumber').value && this.personalDetail.get('faxNumber').value != "") {
                updateProfileData['fax'] = this.personalDetail.get('faxNumber').value;
            }
            this.userAPIService.updateProfile(updateProfileData).then(function (res) {
                if (!_this.showPasswordChange) {
                    _this.utilityService.showAlert(res['msg']);
                    _this.event.publish('updateProfile');
                    _this.fName = _this.personalDetail.get('fName').value;
                    _this.lName = _this.personalDetail.get('lName').value;
                    _this.phNumber = _this.personalDetail.get('phNumber').value;
                    _this.faxNumber = _this.personalDetail.get('faxNumber').value;
                }
            }).catch(function (error) {
                if (error['error']['error']) {
                    _this.utilityService.showAlert(error['error']['error']);
                }
            });
            if (this.showPasswordChange) {
                var passwordDetail = {
                    password: this.personalDetail.get('password').value,
                    newPassword: this.personalDetail.get('newPassword').value
                };
                this.userAPIService.changePassword(passwordDetail).then(function (res) {
                    _this.showPasswordChange = false;
                    _this.personalDetail.controls['password'].setValue('');
                    _this.personalDetail.controls['newPassword'].setValue('');
                    _this.utilityService.showAlert(res['msg']);
                    _this.event.publish('updateProfile');
                }).catch(function (error) {
                    if (error['error']['error']) {
                        _this.utilityService.showAlert(error['error']['error']);
                    }
                });
            }
        }
    };
    PersonalDetailComponent.prototype.moveFocus = function (event, nextElement) {
        if (event.code == 'Enter') {
            nextElement.setFocus();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PersonalDetailComponent.prototype, "isEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PersonalDetailComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PersonalDetailComponent.prototype, "fName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PersonalDetailComponent.prototype, "lName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PersonalDetailComponent.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PersonalDetailComponent.prototype, "phNumber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PersonalDetailComponent.prototype, "faxNumber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PersonalDetailComponent.prototype, "profilePic", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PersonalDetailComponent.prototype, "isSocialLogin", void 0);
    PersonalDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'personal-detail',template:/*ion-inline-start:"/SA_Project/Project/iBeed/SourceCode_ionic/src/components/Settings/personal-detail/personal-detail.html"*/'<!-- Personal Detail Section -->\n<div class="personal-detail-component" *ngIf="!isEdit">\n  <div class="personal-detail-box">\n    <div class="label">\n      {{ \'YOUR_FAMILY_NAME\' | translate }}\n    </div>\n    <div class="label-value" *ngIf="lName">\n      {{lName}}\n    </div>\n    <div class="label-value" *ngIf="!lName">\n    </div>\n  </div>\n  <div class="personal-detail-box">\n    <div class="label">\n      {{ \'YOUR_FIRST_NAME\' | translate }}\n    </div>\n    <div class="label-value" *ngIf="fName">\n      {{fName}}\n    </div>\n    <div class="label-value" *ngIf="!fName">\n    </div>\n  </div>\n  <div class="personal-detail-box">\n    <div class="label">\n      {{ \'EMAIL\' | translate }}\n    </div>\n    <div class="label-value" *ngIf="email">\n      {{email}}\n    </div>\n    <div class="label-value" *ngIf="!email">\n    </div>\n  </div>\n  <div class="personal-detail-box">\n    <div class="label">\n      {{ \'PHONE\' | translate }}\n    </div>\n    <div class="label-value" *ngIf="phNumber">\n      {{phNumber}}\n    </div>\n    <div class="label-value" *ngIf="!phNumber">\n    </div>\n  </div>\n  <!-- <div class="personal-detail-box">\n    <div class="label">\n      {{ \'FAX\' | translate }}\n    </div>\n    <div class="label-value" *ngIf="faxNumber">\n      {{faxNumber}}\n    </div>\n    <div class="label-value" *ngIf="!faxNumber">\n\n    </div>\n  </div> -->\n\n  <div class="notFoundData" *ngIf="fName == undefined && lName == undefined && email == undefined && phNumber == undefined && faxNumber == undefined">\n    {{ \'NO_DATA_AVAILABLE\' | translate }}</div>\n</div>\n\n<div class="personal-edit-component" *ngIf="isEdit && personalDetail">\n  <section id="content">\n    <div class="container">\n      <ion-grid no-padding>\n        <ion-row>\n          <form [formGroup]="personalDetail">\n\n            <ion-item>\n              <ion-label color="stackedTitle" stacked>{{ \'YOUR_FAMILY_NAME\' | translate }} :</ion-label>\n              <ion-input type="text" formControlName="lName" placeholder="{{ \'YOUR_FAMILY_NAME\' | translate }}" tabindex="1" (keyup)="moveFocus($event,b)"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label color="stackedTitle" stacked>{{ \'YOUR_FIRST_NAME\' | translate }} :</ion-label>\n              <ion-input type="text" formControlName="fName" placeholder="{{ \'YOUR_FIRST_NAME\' | translate }}" #b tabindex="2" (keyup)="moveFocus($event,c)"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label color="stackedTitle" stacked>{{ \'EMAIL\' | translate }} :</ion-label>\n              <ion-input type="email" formControlName="email" *ngIf="isSocialLogin" readonly disabled></ion-input>\n              <ion-input type="email" formControlName="email" *ngIf="!isSocialLogin"></ion-input>\n            </ion-item>\n            <p ion-text class="custom-validation" [hidden]="!submitted || personalDetail.controls.email.valid" color="danger" padding-left>\n              {{\'ERROR_EMAIL\' | translate}}\n            </p>\n            <ion-item>\n              <ion-label color="stackedTitle" stacked>{{ \'PHONE\' | translate }} :</ion-label>\n              <ion-input type="tel" maxlength="11" formControlName="phNumber" #c tabindex="3" (keyup)="moveFocus($event,d)" placeholder="{{ \'PHONE_NUMBER\' | translate }}"></ion-input>\n            </ion-item>\n\n            <!-- <p ion-text class="custom-validation" [hidden]="!(personalDetail.get(\'phNumber\').value.length >= 1 && personalDetail.get(\'phNumber\').value.length < 11)" color="danger" padding-left>\n              {{\'ERROR_PH_NUMBER\' | translate}}\n            </p> -->\n\n            <ion-label color="stackedTitle" stacked>{{ \'PASSWORD\' | translate }} :</ion-label>\n            <div class="password-filed" *ngIf="!showPasswordChange">\n\n              <ion-input type="password" placeholder="{{ \'PASSWORD\' | translate }}" disabled></ion-input>\n              <p (click)="showPassword()">{{ \'SHOW\' | translate }}</p>\n            </div>\n            <div class="change-password" *ngIf="showPasswordChange">\n              <!-- <ion-input type="password" placeholder="{{ \'OLD_PASSWORD\' | translate }}" formControlName="password"> </ion-input> -->\n              <div class="password-filed" *ngIf="showPasswordChange">\n                <ion-input type="password" placeholder="{{ \'OLD_PASSWORD\' | translate }}" formControlName="password" #d tabindex="4" (keyup)="moveFocus($event,e)">\n                </ion-input>\n                <p (click)="showPassword()">{{ \'HIDE\' | translate }}</p>\n              </div>\n              <ion-input type="password" placeholder="{{ \'NEW_PASSWORD\' | translate }}" formControlName="newPassword" #e tabindex="5"></ion-input>\n            </div>\n            <button class="submit-btn" ion-button full (click)="editProfile()">{{ \'SAVE\' | translate }}</button>\n          </form>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </section>\n</div>'/*ion-inline-end:"/SA_Project/Project/iBeed/SourceCode_ionic/src/components/Settings/personal-detail/personal-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], PersonalDetailComponent);
    return PersonalDetailComponent;
}());

//# sourceMappingURL=personal-detail.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddressDetailComponent = /** @class */ (function () {
    function AddressDetailComponent(formBuilder, utilityService, userAPIService, event, translate) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.utilityService = utilityService;
        this.userAPIService = userAPIService;
        this.event = event;
        this.translate = translate;
        this.showPasswordChange = false;
        this.isValidZipCode = true;
        this.optionListing = [
            { 'name': 'Adachi' },
            { 'name': 'Arakawa' },
            { 'name': 'Bunkyo' },
            { 'name': 'Chiyoda' },
            { 'name': 'Chūō' },
            { 'name': 'Edogawa' },
            { 'name': 'Itabashi' },
            { 'name': 'Katsushika' },
            { 'name': 'Kita' },
            { 'name': 'Kōtō' },
            { 'name': 'Meguro' },
            { 'name': 'Minato' },
            { 'name': 'Nakano' },
            { 'name': 'Nerima' },
            { 'name': 'Ōta' },
            { 'name': 'Setagaya' },
            { 'name': 'Shibuya' },
            { 'name': 'Shinagawa' },
            { 'name': 'Shinjuku' },
            { 'name': 'Suginami' },
            { 'name': 'Sumida' },
            { 'name': 'Taitō' },
            { 'name': 'Toshima' },
        ];
        this.submitted = false;
        setTimeout(function () {
            _this.addressDetail = _this.formBuilder.group({
                address1: [_this.address1, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                address2: [_this.address2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                address3: [_this.address3, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                city: [_this.city, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                prefecture: [_this.prefecture, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                ward: [_this.ward],
                postalCode: [_this.postalCode, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            });
        }, 50);
        this.event.unsubscribe('resetFromAddressDetail');
        this.event.subscribe('resetFromAddressDetail', function (res) {
            _this.submitted = false;
            _this.addressDetail = _this.formBuilder.group({
                address1: [_this.address1, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                address2: [_this.address2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                address3: [_this.address3, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                city: [_this.city, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                prefecture: [_this.prefecture, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                ward: [_this.ward],
                postalCode: [_this.postalCode, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            });
        });
        // this.getAddress();
    }
    AddressDetailComponent.prototype.moveFocus = function (event, nextElement, index) {
        if (event.code == 'Enter') {
            if (index == 1) {
                this.getAddress();
            }
            nextElement.setFocus();
        }
    };
    AddressDetailComponent.prototype.showPassword = function () {
        this.showPasswordChange = true;
    };
    AddressDetailComponent.prototype.saveAddress = function () {
        var _this = this;
        this.submitted = true;
        if (!this.addressDetail.get('address1').valid) {
            // this.utilityService.presentToast('ERROR_LINE_1', true);
        }
        else if (!this.addressDetail.get('city').valid) {
            // this.utilityService.presentToast('ERROR_CITY', true);
        }
        else if (!this.addressDetail.get('postalCode').valid) {
            // this.utilityService.presentToast('ERROR_POSTAL_CODE', true);
        }
        else if (!this.addressDetail.get('prefecture').valid) {
            // this.utilityService.presentToast('ERROR_PREFECTURE', true);
        }
        else if (this.addressDetail.get('city').value.toLowerCase() == 'tokyo' && !this.addressDetail.get('ward').valid) {
            // this.utilityService.presentToast('ERROR_WARD', true);
        }
        else if (!this.isValidZipCode) {
            var errorMessage = "INVALID_ZIP";
            this.translate.get(errorMessage).subscribe(function (value) {
                _this.utilityService.showAlert(value);
            });
        }
        else {
            this.submitted = false;
            var tmpData = {
                addressLine1: this.addressDetail.get('address1').value,
                city: this.addressDetail.get('city').value,
                postalCode: this.addressDetail.get('postalCode').value,
                prefecture: this.addressDetail.get('prefecture').value,
                wards: this.addressDetail.get('city').value.toLowerCase() == 'tokyo' ? this.addressDetail.get('ward').value : undefined,
            };
            if (this.addressDetail.get('address2').value && this.addressDetail.get('address2').value != '') {
                tmpData['addressLine2'] = this.addressDetail.get('address2').value;
            }
            if (this.addressDetail.get('address3').value && this.addressDetail.get('address3').value != '') {
                tmpData['addressLine3'] = this.addressDetail.get('address3').value;
            }
            var updateProfileData = { address: tmpData };
            this.userAPIService.updateProfile(updateProfileData).then(function (res) {
                _this.event.publish('updateProfile');
            }).catch(function (error) {
                if (error['error']['error']) {
                    _this.utilityService.showAlert(error['error']['error']);
                }
            });
        }
    };
    AddressDetailComponent.prototype.isCityTokoyo = function () {
        return this.addressDetail.get('city').value != null && this.addressDetail.get('city').value.toLowerCase() == 'tokyo';
    };
    AddressDetailComponent.prototype.getAddress = function () {
        var _this = this;
        if (this.addressDetail.get('postalCode').valid) {
            var errorMessage_1 = "INVALID_ZIP";
            this.translate.get(errorMessage_1).subscribe(function (value) {
                errorMessage_1 = value;
            });
            this.userAPIService.getAddress(this.addressDetail.get('postalCode').value.replace("-", "")).then(function (res) {
                console.log('res', res);
                if (res['status'] == "OK") {
                    var obj = res['results'][0].address_components;
                    console.log(obj);
                    if (obj.length < 5) {
                        _this.isValidZipCode = false;
                        _this.utilityService.showAlert(errorMessage_1);
                        return;
                    }
                    _this.addressDetail.controls['prefecture'].setValue(obj[3]['long_name']); // 都道府県
                    _this.addressDetail.controls['city'].setValue(obj[2]['long_name']); // 市区町村
                    _this.addressDetail.controls['address1'].setValue(obj[1]['long_name']); // 番地
                    _this.isValidZipCode = true;
                }
                else {
                    _this.isValidZipCode = false;
                    _this.utilityService.showAlert(errorMessage_1);
                }
            }).catch(function (error) {
                _this.isValidZipCode = false;
                _this.utilityService.showAlert(errorMessage_1);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AddressDetailComponent.prototype, "isEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AddressDetailComponent.prototype, "address1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AddressDetailComponent.prototype, "prefecture", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AddressDetailComponent.prototype, "ward", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AddressDetailComponent.prototype, "address2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AddressDetailComponent.prototype, "address3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AddressDetailComponent.prototype, "city", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AddressDetailComponent.prototype, "postalCode", void 0);
    AddressDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'addressdetail',template:/*ion-inline-start:"/SA_Project/Project/iBeed/SourceCode_ionic/src/components/Settings/address-detail/address-detail.html"*/'<!-- Address Detail Section -->\n<div class="personal-detail-component" *ngIf="!isEdit">\n  <div class="personal-detail-box" *ngIf="postalCode">\n    <div class="label">\n      {{ \'POSTAL_CODE\' | translate }}\n    </div>\n    <div class="label-value">\n      {{postalCode}}\n    </div>\n  </div>\n  <div class="personal-detail-box" *ngIf="prefecture">\n    <div class="label">\n      {{ \'PREPFECTURE\' | translate }}\n    </div>\n    <div class="label-value">\n      {{prefecture}}\n    </div>\n  </div>\n  <div class="personal-detail-box" *ngIf="city">\n    <div class="label">\n      {{ \'CITY\' | translate }}\n    </div>\n    <div class="label-value">\n      {{city}}\n    </div>\n  </div>\n  <div class="personal-detail-box" *ngIf="ward">\n    <div class="label">\n      {{ \'WARDS\' | translate }}\n    </div>\n    <div class="label-value">\n      {{ward}}\n    </div>\n  </div>\n  <div class="personal-detail-box" *ngIf="address1">\n    <div class="label">\n      {{ \'ADDRESS_1\' | translate }}\n    </div>\n    <div class="label-value">\n      {{address1}}\n    </div>\n  </div>\n  <div class="personal-detail-box" *ngIf="address2">\n    <div class="label">\n      {{ \'ADDRESS_2\' | translate }}\n    </div>\n    <div class="label-value">\n      {{address2}}\n    </div>\n  </div>\n  <div class="personal-detail-box" *ngIf="address3">\n    <div class="label">\n      {{ \'ADDRESS_3\' | translate }}\n    </div>\n    <div class="label-value">\n      {{address3}}\n    </div>\n  </div>\n  <div class="notFoundData" *ngIf="postalCode == undefined && prefecture == undefined && city == undefined && ward == undefined && address1 == undefined && address2 == undefined">{{ \'NO_DATA_AVAILABLE\' | translate }}</div>\n\n</div>\n\n<!-- Personal Address Section -->\n<div class="personal-edit-component" id="address" *ngIf="isEdit">\n  <section id="content">\n    <div class="container">\n      <ion-grid no-padding>\n        <ion-row>\n          <form [formGroup]="addressDetail">\n            <ion-item>\n              <ion-label color="stackedTitle" stacked>{{ \'POSTAL_CODE\' | translate }} :</ion-label>\n              <ion-input tabindex="1" formControlName="postalCode" class="zipcode" type="text" placeholder="{{ \'POSTAL_CODE\' | translate }}"\n                (blur)="getAddress()" tabindex="1" (keyup)="moveFocus($event,b,1)"></ion-input>\n            </ion-item>\n\n            <!-- <ion-input formControlName="postalCode" class="zipcode" type="text" placeholder="{{ \'POSTAL_CODE\' | translate }}" tabindex="1"\n              (keyup)="moveFocus($event,b,1)"></ion-input> -->\n            <p ion-text class="custom-validation" [hidden]="!submitted || addressDetail.controls.postalCode.valid" color="danger" padding-left>\n              {{\'ERROR_POSTAL_CODE\' | translate}}\n            </p>\n            <ion-item>\n              <ion-label color="stackedTitle" stacked>{{ \'PREPFECTURE\' | translate }} :</ion-label>\n              <ion-input formControlName="prefecture" class="prefecture" type="text" placeholder="{{ \'PREPFECTURE\' | translate }}" #b tabindex="2"\n                (keyup)="moveFocus($event,c,2)"></ion-input>\n            </ion-item>\n\n            <p ion-text class="custom-validation" [hidden]="!submitted || addressDetail.controls.prefecture.valid" color="danger" padding-left>\n              {{\'ERROR_PREFECTURE\' | translate}}\n            </p>\n\n            <ion-item>\n              <ion-label color="stackedTitle" stacked>{{ \'CITY\' | translate }} :</ion-label>\n              <ion-input formControlName="city" class="city" type="text" placeholder="{{ \'CITY\' | translate }}" #c tabindex="3" (keyup)="moveFocus($event,d,3)"></ion-input>\n            </ion-item>\n\n\n\n            <p ion-text class="custom-validation" [hidden]="!submitted || addressDetail.controls.city.valid" color="danger" padding-left>\n              {{\'ERROR_CITY\' | translate}}\n            </p>\n\n\n            <ion-list class="select-list ward" *ngIf="isCityTokoyo()">\n              <ion-item>\n                <ion-select interface="action-sheet" placeholder="{{ \'WARDS\' | translate }}" formControlName="ward" cancelText="{{\'CANCEL\' | translate}}">\n                  <ion-option *ngFor="let listOption of optionListing">{{listOption.name}}</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-list>\n\n            <p ion-text class="custom-validation" [hidden]="isCityTokoyo() || !submitted || addressDetail.controls.ward.valid" color="danger"\n              padding-left>\n              {{\'ERROR_WARD\' | translate}}\n            </p>\n\n            <ion-item>\n              <ion-label color="stackedTitle" stacked>{{ \'ADDRESS_1\' | translate }} :</ion-label>\n              <ion-input formControlName="address1" class="address" type="text" placeholder="{{ \'ADDRESS_1\' | translate }}" #d tabindex="4"\n                (keyup)="moveFocus($event,e,4)"></ion-input>\n            </ion-item>\n\n\n\n            <p ion-text class="custom-validation" [hidden]="!submitted || addressDetail.controls.address1.valid" color="danger" padding-left>\n              {{\'ERROR_LINE_1\' | translate}}\n            </p>\n\n            <ion-item>\n              <ion-label color="stackedTitle" stacked>{{ \'ADDRESS_2\' | translate }} :</ion-label>\n              <ion-input formControlName="address2" class="address" type="text" placeholder="{{ \'ADDRESS_2\' | translate }}" #e tabindex="5"\n                (keyup)="moveFocus($event,f,5)"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label color="stackedTitle" stacked>{{ \'ADDRESS_3\' | translate }} :</ion-label>\n              <ion-input formControlName="address3" class="address" type="text" placeholder="{{ \'ADDRESS_3\' | translate }}" #f tabindex="6"></ion-input>\n            </ion-item>\n            <button type="button" class="submit-btn" ion-button full (click)="saveAddress()">{{ \'SAVE\' | translate }}</button>\n          </form>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </section>\n</div>'/*ion-inline-end:"/SA_Project/Project/iBeed/SourceCode_ionic/src/components/Settings/address-detail/address-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__providers_utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], AddressDetailComponent);
    return AddressDetailComponent;
}());

//# sourceMappingURL=address-detail.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilyDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utility_utility__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_service_user_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_sim__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FamilyDetailComponent = /** @class */ (function () {
    function FamilyDetailComponent(actionSheetCtrl, formBuilder, utilityService, camera, platform, actionsheetCtrl, alertCtrl, loadingCtrl, event, sim, translate, userAPIService) {
        var _this = this;
        this.actionSheetCtrl = actionSheetCtrl;
        this.formBuilder = formBuilder;
        this.utilityService = utilityService;
        this.camera = camera;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.event = event;
        this.sim = sim;
        this.translate = translate;
        this.userAPIService = userAPIService;
        this.isEdit = false;
        this.isEditing = false;
        this.showingPriviews = false;
        this.submitted = false;
        this.relationShipList = [
            'RELATIONSHIP_HUSBAND',
            'RELATIONSHIP_WIFE',
            'RELATIONSHIP_FATHER',
            'RELATIONSHIP_MOTHER',
            'RELATIONSHIP_SON',
            'RELATIONSHIP_DAUGHTER',
            'RELATIONSHIP_FIL',
            'RELATIONSHIP_MIL',
            'RELATIONSHIP_SIL',
            'RELATIONSHIP_DIL',
            'RELATIONSHIP_GF',
            'RELATIONSHIP_GM',
            'RELATIONSHIP_EB',
            'RELATIONSHIP_YB',
            'RELATIONSHIP_ES',
            'RELATIONSHIP_YS',
            'RELATIONSHIP_GS',
            'RELATIONSHIP_GD',
            'RELATIONSHIP_GFIL',
            'RELATIONSHIP_GMIL',
            'RELATIONSHIP_EBIL',
            'RELATIONSHIP_YBIL',
            'RELATIONSHIP_ESIL',
            'RELATIONSHIP_YSIL',
            'RELATIONSHIP_GSIL',
            'RELATIONSHIP_GDIL',
            'RELATIONSHIP_OR'
        ];
        this.familyDetail = this.formBuilder.group({
            fName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            lName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            relationShip: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            phNumber: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            fax: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            profielPic: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            isBeneficiary: ['false', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
        });
        this.sim.getSimInfo().then(function (info) {
            _this.countryCode = info['countryCode'] == 'in' ? "+91" : info['countryCode'] == "" ? "+91" : "+81";
            if (_this.countryCode == "") {
                _this.countryCode = "+91";
            }
        }, function (err) {
            _this.countryCode = "+91";
        });
        this.event.unsubscribe('resetFrom');
        this.event.subscribe('resetFrom', function (res) {
            _this.submitted = false;
            _this.familyDetail = _this.formBuilder.group({
                fName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                lName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                relationShip: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                phNumber: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                fax: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                profielPic: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                isBeneficiary: ['false', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            });
            _this.uploadPrevciew = undefined;
            _this.isEditing = false;
        });
    }
    FamilyDetailComponent.prototype.editDetails = function (familyMember, index) {
        var _this = this;
        var actionSheetList = [{
                text: 'EDIT',
                role: 'destructive',
                handler: function () {
                    _this.editFamilyMember = familyMember;
                    _this.familyDetail = _this.formBuilder.group({
                        fName: [familyMember.firstName, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                        lName: [familyMember.lastName, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                        relationShip: [familyMember.relationship, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                        email: [familyMember.email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                        phNumber: [familyMember.phone, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                        fax: [familyMember.fax, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                        profielPic: [familyMember.profilePic, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                        isBeneficiary: [familyMember.beneficiary, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                    });
                    _this.uploadPrevciew = familyMember.profilePic;
                    _this.event.publish('isEdit');
                    _this.isEdit = !_this.isEdit;
                    if (_this.isEdit) {
                        _this.event.publish('trackView', 'On Family Edit');
                    }
                    _this.isEditing = true;
                }
            }, {
                text: 'REMOVE',
                handler: function () {
                    _this.presentConfirm(familyMember, index);
                }
            }, {
                text: 'CANCEL',
                role: 'cancel',
                handler: function () {
                },
            }];
        var _loop_1 = function (action) {
            this_1.translate.get(action['text']).subscribe(function (value) {
                action['text'] = value;
            });
        };
        var this_1 = this;
        for (var _i = 0, actionSheetList_1 = actionSheetList; _i < actionSheetList_1.length; _i++) {
            var action = actionSheetList_1[_i];
            _loop_1(action);
        }
        var actionSheet = this.actionSheetCtrl.create({
            cssClass: 'select-action-sheet',
            buttons: actionSheetList
        });
        actionSheet.present();
    };
    FamilyDetailComponent.prototype.presentConfirm = function (familyMember, index) {
        var _this = this;
        var alertList = [{
                text: 'YES',
                handler: function () {
                    _this.userAPIService.deleteFamilyMember({ id: familyMember._id }).then(function (res) {
                        _this.familyList.splice(index, 1);
                    }).catch(function (error) {
                        var tmpDic = error.error;
                        if (tmpDic.msg) {
                            _this.utilityService.showAlert(tmpDic.msg);
                        }
                    });
                }
            }, {
                text: 'NO',
                handler: function () {
                }
            }];
        var _loop_2 = function (alert_1) {
            this_2.translate.get(alert_1['text']).subscribe(function (value) {
                alert_1['text'] = value;
            });
        };
        var this_2 = this;
        for (var _i = 0, alertList_1 = alertList; _i < alertList_1.length; _i++) {
            var alert_1 = alertList_1[_i];
            _loop_2(alert_1);
        }
        var title = 'iBeed Mari';
        this.translate.get('LOGO_NAME').subscribe(function (value) {
            title = value;
        });
        var message = 'Are you sure, you want to remove this family member?';
        this.translate.get('DELETE_FAMILY_CONFIRMATION').subscribe(function (value) {
            message = value;
        });
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: alertList
        });
        alert.present();
    };
    FamilyDetailComponent.prototype.changeBeneficiary = function (familyMember) {
        var _this = this;
        var requestData = {
            beneficiary: !familyMember.beneficiary
        };
        requestData['familyMemberId'] = familyMember._id;
        this.userAPIService.editFamilyMember(requestData).then(function (res) {
            _this.event.publish('updateFamilyList');
            _this.utilityService.showAlert(res['msg']);
        }).catch(function (error) {
            _this.utilityService.showAlert(error['error']['error']);
            // let tmpDic = error.error;
            _this.event.publish('updateFamilyList');
            // this.utilityService.showAlert(tmpDic.msg);
        });
    };
    FamilyDetailComponent.prototype.addFamilyMember = function () {
        var _this = this;
        console.log(this.familyDetail);
        this.submitted = true;
        if (!this.familyDetail.get('fName').valid) {
            // this.utilityService.presentToast('ERROR_FIRST_NAME', true);
        }
        else if (!this.familyDetail.get('lName').valid) {
            // this.utilityService.presentToast('ERROR_LAST_NAME', true);
        }
        else if (!this.familyDetail.get('relationShip').valid) {
            // this.utilityService.presentToast('ERROR_RELATIONSHIP', true);
        }
        else if (!this.familyDetail.get('email').valid) {
            // this.utilityService.presentToast('ERROR_EMAIL', true);
        }
        else if (!this.familyDetail.get('profielPic').valid) {
            // this.utilityService.presentToast('ERROR_PROFILE_PIC', true);
        }
        else {
            this.submitted = false;
            var familyMemberData = {
                firstName: this.familyDetail.get('fName').value,
                lastName: this.familyDetail.get('lName').value,
                // phone: this.familyDetail.get('phNumber').value,
                email: this.familyDetail.get('email').value,
                relationship: this.familyDetail.get('relationShip').value,
            };
            // if (this.familyDetail.get('fax').value && this.familyDetail.get('fax').value != "") {
            //   familyMemberData['fax'] = this.familyDetail.get('fax').value;
            // }
            if (this.isEditing) {
                if (!this.uploadPrevciew.includes('https://')) {
                    familyMemberData['image'] = this.familyDetail.get('profielPic').value;
                }
                else {
                    delete familyMemberData['image'];
                }
                familyMemberData['familyMemberId'] = this.editFamilyMember._id;
                this.userAPIService.editFamilyMember(familyMemberData).then(function (res) {
                    _this.isEdit = !_this.isEdit;
                    _this.event.publish('updateFamilyList');
                    _this.event.publish('isEditFalse');
                    _this.familyDetail = _this.formBuilder.group({
                        fName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                        lName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                        relationShip: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                        email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                        // phNumber: ['', Validators.required],
                        // fax: ['', Validators.required],
                        profielPic: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                    });
                    _this.isEditing = false;
                }).catch(function (error) {
                    _this.utilityService.showAlert(error['error']['error']);
                });
            }
            else {
                familyMemberData['image'] = this.familyDetail.get('profielPic').value;
                this.userAPIService.addFamilyMember(familyMemberData).then(function (res) {
                    _this.isEdit = !_this.isEdit;
                    _this.event.publish('updateFamilyList');
                    _this.event.publish('isEditFalse');
                    _this.familyDetail = _this.formBuilder.group({
                        fName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                        lName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                        relationShip: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                        email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                        // phNumber: ['', Validators.required],
                        // fax: ['', Validators.required],
                        profielPic: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                    });
                    _this.uploadPrevciew = undefined;
                }).catch(function (error) {
                    _this.utilityService.showAlert(error['error']['error']);
                });
            }
        }
    };
    FamilyDetailComponent.prototype.takePicture = function () {
        var _this = this;
        var buttonList = [{
                text: 'PHOTO_LIBRARY',
                handler: function () {
                    var type = _this.camera.PictureSourceType.PHOTOLIBRARY;
                    _this.selectPicture(type);
                },
            }, {
                text: 'PHOTO_CAMERA',
                handler: function () {
                    var type = _this.camera.PictureSourceType.CAMERA;
                    _this.selectPicture(type);
                },
            }, {
                text: 'CANCEL',
                role: 'cancel',
                icon: !this.platform.is('ios') ? 'close' : null,
                handler: function () {
                    //  UtilityServiceProvider.log('Cancel clicked');
                },
            },];
        var _loop_3 = function (alert_2) {
            this_3.translate.get(alert_2['text']).subscribe(function (value) {
                alert_2['text'] = value;
            });
        };
        var this_3 = this;
        for (var _i = 0, buttonList_1 = buttonList; _i < buttonList_1.length; _i++) {
            var alert_2 = buttonList_1[_i];
            _loop_3(alert_2);
        }
        var localizeTitle = 'PHOTO_SOURCE';
        this.translate.get(localizeTitle).subscribe(function (value) {
            localizeTitle = value;
        });
        var actionSheet = this.actionsheetCtrl.create({
            title: localizeTitle,
            cssClass: 'action-sheets-basic-page',
            buttons: buttonList,
        });
        actionSheet.present();
    };
    FamilyDetailComponent.prototype.changeImage = function () {
        this.takePicture();
    };
    FamilyDetailComponent.prototype.removeImage = function () {
        this.showingPriviews = false;
    };
    FamilyDetailComponent.prototype.selectPicture = function (sourceType) {
        var _this = this;
        var options = {
            mediaType: this.camera.MediaType.PICTURE,
            quality: 100,
            targetHeight: 200,
            targetWidth: 200,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: sourceType,
            encodingType: this.camera.EncodingType.PNG,
            saveToPhotoAlbum: false,
        };
        var loader = this.loadingCtrl.create();
        loader.present();
        this.camera.getPicture(options).then(function (imagePath) {
            _this.showingPriviews = true;
            _this.uploadPrevciew = 'data:image/jpeg;base64,' + imagePath;
            _this.familyDetail.controls['profielPic'].setValue(_this.uploadPrevciew);
            loader.dismissAll();
        }, function (err) {
            loader.dismissAll();
        });
    };
    FamilyDetailComponent.prototype.moveFocus = function (event, nextElement) {
        if (event.code == 'Enter') {
            nextElement.setFocus();
        }
    };
    FamilyDetailComponent.prototype.editForm = function () {
        this.isEdit = !this.isEdit;
        this.event.publish('isEdit');
        if (this.isEdit) {
            this.familyDetail = this.formBuilder.group({
                fName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                lName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                relationShip: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                phNumber: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                fax: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                profielPic: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
                isBeneficiary: ['false', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            });
            this.event.publish('trackView', 'On Family Edit');
        }
        else {
            this.event.publish('trackView', 'On Family Create');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FamilyDetailComponent.prototype, "isEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FamilyDetailComponent.prototype, "familyList", void 0);
    FamilyDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'family-detail',template:/*ion-inline-start:"/SA_Project/Project/iBeed/SourceCode_ionic/src/components/Settings/family-detail/family-detail.html"*/'<div class="family-component" id="family-section" *ngIf="!isEdit">\n\n  <div class="family-header" *ngIf="familyList && familyList.length > 0">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6 text-left>\n          <ion-title>{{ \'NAME\' | translate }}</ion-title>\n        </ion-col>\n        <ion-col col-4 text-right>\n          <ion-title class="beneficiaryTitle">{{ \'BENEFICIARY\' | translate }}</ion-title>\n        </ion-col>\n        <ion-col col-2 no-padding text-right>\n          <button class="custom-add-btn" ion-button icon-only (click)="editForm()">\n            <ion-icon name="md-add"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class="family-member-listing">\n    <ion-grid class="member-listing" *ngFor="let familyMember of familyList;let indx = index">\n      <ion-row>\n        <ion-col col-2>\n          <ion-avatar item-start>\n            <img [src]="familyMember.profilePic" *ngIf="familyMember.profilePic">\n            <img src="assets/imgs/defaultprofile.png" *ngIf="!familyMember.profilePic">\n          </ion-avatar>\n        </ion-col>\n        <ion-col col-6>\n          <div class="basic-info">\n            <h2>{{familyMember.lastName}} {{familyMember.firstName}}</h2>\n            <p>{{familyMember.relationship}}</p>\n          </div>\n        </ion-col>\n        <ion-col col-2 no-padding>\n          <ion-item>\n            <ion-toggle color="energized" [checked]="familyMember.beneficiary" (ionChange)="changeBeneficiary(familyMember)"></ion-toggle>\n          </ion-item>\n        </ion-col>\n        <ion-col col-2 text-center>\n          <ion-icon class="editDetailIcon" name="more" tappable (click)="editDetails(familyMember,indx)"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <ion-grid *ngIf="familyList == undefine || familyList.length == 0">\n    <ion-row>\n      <ion-col col-8>\n      </ion-col>\n      <ion-col col-2>\n      </ion-col>\n      <ion-col col-2 no-padding text-right>\n        <button class="custom-add-btn" ion-button icon-only (click)="editForm()">\n          <ion-icon name="md-add"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class="notFoundData" *ngIf="familyList == undefine || familyList.length == 0">\n    {{ \'NO_DATA_AVAILABLE\' | translate }}\n  </div>\n</div>\n\n\n<!-- Personal Family Edit Section -->\n<div class="personal-edit-component" id="addFamilyMember" *ngIf="isEdit">\n  <div class="familyPhoto" [formGroup]="familyDetail">\n    <ion-avatar item-start>\n      <div class="editFamilyPhoto" (click)="takePicture()">\n        <img src="assets/imgs/defaultprofile.png" *ngIf="!uploadPrevciew">\n        <img [src]="uploadPrevciew" *ngIf="uploadPrevciew">\n        <div class="upload-img">\n          <img src="assets/imgs/settings/img-upload.png">\n        </div>\n      </div>\n    </ion-avatar>\n    <p ion-text class="custom-validation" [hidden]="!submitted || familyDetail.controls.profielPic.valid" color="danger">\n      {{\'ERROR_PROFILE_PIC\' | translate}}\n    </p>\n  </div>\n  <section id="content">\n    <div class="container">\n      <ion-grid no-padding>\n        <ion-row>\n          <form [formGroup]="familyDetail">\n            <ion-item>\n              <ion-label color="stackedTitle" stacked>{{ \'YOUR_FAMILY_NAME\' | translate }} :</ion-label>\n              <ion-input type="text" placeholder="{{ \'YOUR_FAMILY_NAME\' | translate }}" formControlName="lName" tabindex="1" (keyup)="moveFocus($event,b)"></ion-input>\n            </ion-item>\n\n            <p ion-text class="custom-validation" [hidden]="!submitted || familyDetail.controls.lName.valid" color="danger" padding-left>\n              {{\'ERROR_LAST_NAME\' | translate}}\n            </p>\n            <ion-item>\n              <ion-label color="stackedTitle" stacked>{{ \'YOUR_FIRST_NAME\' | translate }} :</ion-label>\n              <ion-input type="text" placeholder="{{ \'YOUR_FIRST_NAME\' | translate }}" formControlName="fName" #b tabindex="2" (keyup)="moveFocus($event,c)"></ion-input>\n            </ion-item>\n\n            <p ion-text class="custom-validation" [hidden]="!submitted || familyDetail.controls.fName.valid" color="danger" padding-left>\n              {{\'ERROR_FIRST_NAME\' | translate}}\n            </p>\n\n            <ion-item>\n              <ion-label color="stackedTitle" stacked>{{ \'EMAIL\' | translate }} :</ion-label>\n              <ion-input type="email" placeholder="{{ \'EMAIL\' | translate }}" formControlName="email" #c tabindex="3"></ion-input>\n            </ion-item>\n\n\n            <p ion-text class="custom-validation" [hidden]="!submitted || familyDetail.controls.email.valid" color="danger" padding-left>\n              {{\'ERROR_EMAIL\' | translate}}\n            </p>\n            <div id="insurance-management">\n              <ion-label color="stackedTitle" stacked>{{ \'RELATIONSHIP\' | translate }} :</ion-label>\n              <ion-list class="select-list">\n\n                <ion-item>\n\n                  <ion-select interface="action-sheet" formControlName="relationShip" placeholder="{{ \'RELATIONSHIP\' | translate }}" cancelText="{{\'CANCEL\' | translate}}">\n                    <ion-option *ngFor="let relation of relationShipList" [value]="policyFrequency | translate">{{relation | translate}}</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-list>\n            </div>\n            <p ion-text class="custom-validation" [hidden]="!submitted || familyDetail.controls.relationShip.valid" color="danger" padding-left>\n            </p>\n            <button class="submit-btn" type="button" ion-button full (click)="addFamilyMember()" *ngIf="!isEditing">{{ \'ADD_FAMILY_MEMBER\' | translate }}</button>\n            <button class="submit-btn" type="button" ion-button full (click)="addFamilyMember()" *ngIf="isEditing">{{ \'EDIT_FAMILY_MEMBER\' | translate }}</button>\n          </form>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </section>\n</div>'/*ion-inline-end:"/SA_Project/Project/iBeed/SourceCode_ionic/src/components/Settings/family-detail/family-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__providers_utility_utility__["a" /* UtilityProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_sim__["a" /* Sim */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_service_user_service__["a" /* UserServiceProvider */]])
    ], FamilyDetailComponent);
    return FamilyDetailComponent;
}());

//# sourceMappingURL=family-detail.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_listing_detail_dashboard_listing_detail__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Angular 4 Module Imports





//Discover Component Imports



function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__dashboard_listing_detail_dashboard_listing_detail__["a" /* DashboardListingDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_5__dashboard_listing_detail_dashboard_listing_detail__["a" /* DashboardListingDetailComponent */]),
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__dashboard_listing_detail_dashboard_listing_detail__["a" /* DashboardListingDetailComponent */]
            ],
        })
    ], DashboardModule);
    return DashboardModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardListingDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardListingDetailComponent = /** @class */ (function () {
    function DashboardListingDetailComponent() {
        this.showPasswordChange = false;
    }
    DashboardListingDetailComponent.prototype.getImageName = function (type) {
        if (type == 'Auto') {
            return 'assets/imgs/dash-icon-1.svg';
        }
        else if (type == 'Health') {
            return 'assets/imgs/dash-icon-2.svg';
        }
        else if (type == 'Life') {
            return 'assets/imgs/dash-icon-4.svg';
        }
        else if (type == 'Pet') {
            return 'assets/imgs/dash-icon-3.svg';
        }
        else if (type == 'Home') {
            return 'assets/imgs/dash-icon-5.svg';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DashboardListingDetailComponent.prototype, "insurance", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DashboardListingDetailComponent.prototype, "isShared", void 0);
    DashboardListingDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-listing-detail',template:/*ion-inline-start:"/SA_Project/Project/iBeed/SourceCode_ionic/src/components/Dashboard/dashboard-listing-detail/dashboard-listing-detail.html"*/'<div class="details" [ngClass]="insurance.status == \'active\' ? \'\' : \'expired\'">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3 class="img-high flush-right">\n        <img [src]="getImageName(insurance.insuranceProduct.policyType)" alt="" />\n      </ion-col>\n      <ion-col col-9 class="padding-left-10">\n        <ion-title>{{insurance.organization.name}}</ion-title>\n        <div class="plan-type-data">\n          <ion-grid no-padding>\n            <ion-row>\n              <ion-col col-12>\n                <div class="plan plan-title">\n                  <span>{{ \'PLAN\' | translate }} : </span>{{insurance.insuranceProduct.petName}}\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <ion-grid no-padding>\n            <ion-row>\n              <ion-col col-12>\n                <div class="plan plan-title" *ngIf="insurance.policyHolder">\n                  <span>{{ \'POLICY_HOLDER\' | translate }} : </span>{{insurance.policyHolder}}\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <ion-grid no-padding>\n            <ion-row>\n              <ion-col col-12>\n                <div class="type plan-title" *ngIf="insurance.insured">\n                  <span>{{ \'INSURED\' | translate }} : </span>{{insurance.insured}}\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n        <h5>\n          <img src="assets/imgs/cal-insurance.png" alt="" width="15px" /> {{insurance.startDate | date:\'yyyy/MM/dd\'}} - {{insurance.endDate | date:\'yyyy/MM/dd\'}}\n          <img [src]="insurance.owner.profilePic" class="share-profile-pic" *ngIf="isShared && insurance.owner.profilePic" />\n          <img src="assets/imgs/defaultprofile.png" class="share-profile-pic" *ngIf="isShared && !insurance.owner.profilePic"\n          />\n        </h5>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>'/*ion-inline-end:"/SA_Project/Project/iBeed/SourceCode_ionic/src/components/Dashboard/dashboard-listing-detail/dashboard-listing-detail.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DashboardListingDetailComponent);
    return DashboardListingDetailComponent;
}());

//# sourceMappingURL=dashboard-listing-detail.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsuranceServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service_api_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service_auth_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InsuranceServiceProvider = /** @class */ (function () {
    function InsuranceServiceProvider(apiService, auth, loadingCtrl) {
        this.apiService = apiService;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl;
    }
    InsuranceServiceProvider.prototype.getOrganisationList = function (type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.apiService.get('organization/list-by-policy-type/' + type).subscribe(function (res) {
                resolve({ data: res['organizationList'] });
            }, function (err) {
                reject(err);
            });
        });
    };
    InsuranceServiceProvider.prototype.getProductList = function (companyId, category) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.apiService.get('insuranceproduct/org-product-type/' + companyId + '/' + category).subscribe(function (res) {
                resolve({ data: res['productList'] });
            }, function (err) {
                reject(err);
            });
        });
    };
    InsuranceServiceProvider.prototype.createInsurance = function (insuranceReqeustData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.apiService.postWithHeader('policy/create', insuranceReqeustData).subscribe(function (res) {
                resolve({ data: res });
            }, function (err) {
                reject(err);
            });
        });
    };
    InsuranceServiceProvider.prototype.editInsurance = function (insuranceReqeustData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.apiService.postWithHeader('policy/update', insuranceReqeustData).subscribe(function (res) {
                resolve({ data: res });
            }, function (err) {
                reject(err);
            });
        });
    };
    InsuranceServiceProvider.prototype.getInsuranceList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.apiService.getWithHeader('policy/myPolicyList').subscribe(function (res) {
                var loggedUser = JSON.parse(_this.auth.getLocalStore('LoggedUser'));
                var count = res['policyList']['docs'].length;
                loggedUser['insuranceCount'] = count;
                _this.auth.localStore("LoggedUser", JSON.stringify(loggedUser));
                resolve({ data: res['policyList'] });
            }, function (err) {
                reject(err);
            });
        });
    };
    InsuranceServiceProvider.prototype.getInsuranceDetail = function (insuranceId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.apiService.getWithHeader('policy/policy-detail/' + insuranceId).subscribe(function (res) {
                resolve({ data: res['policyDetail'] });
            }, function (err) {
                reject(err);
            });
        });
    };
    InsuranceServiceProvider.prototype.getSignedUrlForImage = function (policyDoc) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var loading = _this.loadingCtrl.create({});
            loading.present();
            _this.apiService.getWithHeader('user/get-doc-authenticate-url/' + policyDoc.replace("/", "%2f").replace("/", "%2f")).subscribe(function (res) {
                resolve({ data: res['document'] });
                loading.dismiss();
            }, function (err) {
                loading.dismiss();
                reject(err);
            });
        });
    };
    InsuranceServiceProvider.prototype.getSignedUrlForImageUpload = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.apiService.postWithHeader('policy/policy-doc-presigned-url', data).subscribe(function (res) {
                resolve({ data: res['policyDetail'] });
            }, function (err) {
                reject(err);
            });
        });
    };
    InsuranceServiceProvider.prototype.putImageToS3 = function (url, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.apiService.putImageToS3(url, data).subscribe(function (res) {
                resolve({ data: res });
            }, function (err) {
                reject(err);
            });
        });
    };
    InsuranceServiceProvider.prototype.removeInsurance = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.apiService.postWithHeader('policy/remove-policy', data).subscribe(function (res) {
                resolve({ data: res['policyDetail'] });
            }, function (err) {
                reject(err);
            });
        });
    };
    InsuranceServiceProvider.prototype.shareInsurance = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.apiService.postWithHeader('policy/share-policy', data).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    InsuranceServiceProvider.prototype.getBaseURL = function () {
        return this.apiService.getBaseURL();
    };
    InsuranceServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], InsuranceServiceProvider);
    return InsuranceServiceProvider;
}());

//# sourceMappingURL=insurance-service.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service_config_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiServiceProvider = /** @class */ (function () {
    function ApiServiceProvider(http, config, auth) {
        var _this = this;
        this.http = http;
        this.config = config;
        this.auth = auth;
        this.APP_URL = this.config.get('APP_URL');
        this.GOOGLE_KEY = this.config.get('GOOGLE_KEY');
        this.putImageToS3 = function (url, data) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'image/png');
            return _this.http.put(url, data, { headers: headers }).map(function (response) {
                return response;
            }, function (error) {
                return error;
            });
        };
    }
    ApiServiceProvider.prototype.get = function (URL) {
        var response = this.http.get(this.APP_URL + URL, {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('X-L10N-Locale', this.auth.langCode)
        }).map(function (res) { return res; });
        return response;
    };
    ApiServiceProvider.prototype.getWithHeader = function (URL) {
        var response = this.http.get(this.APP_URL + URL, {
            headers: this.createAuthorizationHeader()
        }).map(function (res) { return res; });
        return response;
    };
    ApiServiceProvider.prototype.postWithHeader = function (URL, data) {
        var response = this.http.post(this.APP_URL + URL, data, {
            headers: this.createAuthorizationHeader()
        }).map(function (res) { return res; });
        return response;
    };
    ApiServiceProvider.prototype.getBaseURL = function () {
        return this.APP_URL;
    };
    ApiServiceProvider.prototype.post = function (URL, data) {
        var response = this.http.post(this.APP_URL + URL, data, {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('X-L10N-Locale', this.auth.langCode)
        }).map(function (res) { return res; });
        return response;
    };
    ApiServiceProvider.prototype.createAuthorizationHeader = function () {
        var loggedUser = JSON.parse(this.auth.getLocalStore('LoggedUser'));
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set("authorization", 'Bearer ' + loggedUser['token']).set('X-L10N-Locale', this.auth.langCode);
        return headers;
    };
    ApiServiceProvider.prototype.putWithHeader = function (URL) {
        var response = this.http.put(this.APP_URL + URL, {
            headers: this.createAuthorizationHeader()
        }).map(function (res) { return res; });
        return response;
    };
    ApiServiceProvider.prototype.deleteWithHeader = function (URL, data) {
        var response = this.http.delete(this.APP_URL + URL, data).map(function (res) { return res; });
        return response;
    };
    ApiServiceProvider.prototype.geoCoding = function (URL) {
        var response = this.http.get(URL).map(function (res) { return res; });
        return response;
    };
    ApiServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__config_service_config_service__["a" /* ConfigServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], ApiServiceProvider);
    return ApiServiceProvider;
}());

//# sourceMappingURL=api-service.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEmailServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_user_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service_auth_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utility_utility__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserEmailServiceProvider = /** @class */ (function () {
    function UserEmailServiceProvider(userAPI, loadingCtrl, alertCtrl, translate, util, event, auth) {
        this.userAPI = userAPI;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.util = util;
        this.event = event;
        this.auth = auth;
        this.isFromSignup = false;
    }
    UserEmailServiceProvider.prototype.emailForSocial = function (email) {
        var _this = this;
        var currentObj = this;
        var alertList = [{
                text: 'CANCEL',
                handler: function () {
                    if (window.localStorage.getItem('noEmailFound') == 'true') {
                        window.localStorage.removeItem('noEmailFound');
                        window.localStorage.removeItem('LoggedUser');
                        window.localStorage.removeItem('isUserLogged');
                        _this.event.publish('logout');
                    }
                }
            }, {
                text: 'EMAIL_REGISTER',
                handler: function (data) {
                    console.log('data', data);
                    if (data.email != '') {
                        var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                        var serchfind = regexp.test(data.email);
                        if (serchfind) {
                            _this.checkEmailExists(data, email);
                        }
                        else {
                            _this.util.presentToast('ERROR_VALID_EMAIL', true);
                            _this.emailForSocial('');
                        }
                    }
                    else {
                        _this.util.presentToast('ERROR_VALID_EMAIL', true);
                        _this.emailForSocial('');
                    }
                }
            }];
        var _loop_1 = function (alert_1) {
            currentObj.translate.get(alert_1['text']).subscribe(function (value) {
                alert_1['text'] = value;
            });
        };
        for (var _i = 0, alertList_1 = alertList; _i < alertList_1.length; _i++) {
            var alert_1 = alertList_1[_i];
            _loop_1(alert_1);
        }
        var message = 'iBeed Mari';
        currentObj.translate.get('EMAIL_MISSING').subscribe(function (value) {
            message = value;
        });
        var emails = "EMAIL";
        currentObj.translate.get(emails).subscribe(function (value) {
            emails = value;
        });
        this.emailAlert = currentObj.alertCtrl.create({
            message: message, inputs: [
                {
                    name: 'email',
                    placeholder: emails,
                    value: email,
                    type: 'email'
                }
            ],
            buttons: alertList,
            enableBackdropDismiss: false
        });
        this.emailAlert.present();
    };
    UserEmailServiceProvider.prototype.closeEmailAlert = function () {
        if (this.emailAlert) {
            this.emailAlert.dismiss();
        }
    };
    UserEmailServiceProvider.prototype.checkEmailExists = function (data, email) {
        var _this = this;
        this.userAPI.emailExists({ email: data.email.toLowerCase() }).then(function (res) {
            if (res['emailExist']) {
                if (_this.socialUser.userData) {
                    _this.socialUser.userData.provider.profile['email'] = data.email.toLowerCase();
                }
                else {
                    _this.socialUser.socialInfo.profile['email'] = data.email.toLowerCase();
                }
                _this.existingEmailAlert(data.email, email != '');
            }
            else {
                delete res['emailExist'];
                var loggedUserData = res;
                window.localStorage.setItem('LoggedUser', JSON.stringify(loggedUserData));
                _this.translate.get('EMAIL_REGISTERED').subscribe(function (value) {
                    _this.util.showAlert(value);
                });
                if (_this.isFromSignup) {
                    if ('isWalkThrough' in loggedUserData['userData']) {
                        if (loggedUserData['userData']['isWalkThrough']) {
                            _this.event.publish('walkThrough');
                        }
                        else {
                            _this.event.publish('loggedIn');
                        }
                    }
                    else {
                        _this.event.publish('loggedIn');
                    }
                }
            }
        }).catch(function (error) {
        });
    };
    UserEmailServiceProvider.prototype.existingEmailAlert = function (email, isExist) {
        var _this = this;
        var currentObj = this;
        var other = {
            text: 'EMAIL_USE_OTHER',
            handler: function () {
                if (!_this.isFromSignup || _this.socialUser.socialInfo) {
                    currentObj.emailForSocial('');
                }
            }
        };
        var cancel = {
            text: 'CANCEL',
            handler: function () {
                if (window.localStorage.getItem('noEmailFound') == 'true') {
                    window.localStorage.removeItem('noEmailFound');
                    window.localStorage.removeItem('LoggedUser');
                    window.localStorage.removeItem('isUserLogged');
                    _this.event.publish('logout');
                }
            }
        };
        var register = {
            text: 'MERGE_ACCOUNT',
            handler: function () {
                currentObj.sendMigrationLink();
            }
        };
        var alertList = [];
        if (isExist && !this.isFromSignup) {
            alertList.push(cancel);
        }
        else {
            alertList.push(other);
        }
        alertList.push(register);
        var _loop_2 = function (alert_2) {
            currentObj.translate.get(alert_2['text']).subscribe(function (value) {
                alert_2['text'] = value;
            });
        };
        for (var _i = 0, alertList_2 = alertList; _i < alertList_2.length; _i++) {
            var alert_2 = alertList_2[_i];
            _loop_2(alert_2);
        }
        var message = 'iBeed Mari';
        currentObj.translate.get(this.isFromSignup ? 'EMAIL_EXISTS_TITLE_SIGNUP' : 'EMAIL_EXISTS_TITLE').subscribe(function (value) {
            message = value.replace('USER_EMAIL', email);
        });
        var alert = currentObj.alertCtrl.create({
            message: message,
            buttons: alertList,
            enableBackdropDismiss: false
        });
        alert.present();
    };
    UserEmailServiceProvider.prototype.sendMigrationLink = function () {
        var _this = this;
        console.log('mergerAccount', this.socialUser);
        this.userAPI.mergerAccount(this.socialUser).then(function (res) {
            _this.translate.get('MIGRATION_LINK').subscribe(function (value) {
                _this.util.showAlert(value);
            });
        }).catch(function (error) {
        });
    };
    UserEmailServiceProvider.prototype.checkMigrationLink = function (loggedUser) {
        var _this = this;
        this.socialUser = loggedUser;
        if (loggedUser.userData.provider) {
            this.isFromSignup = false;
            if (loggedUser.userData.provider.profile.email && loggedUser.userData.provider.profile.email != '') {
                this.userAPI.migrationVerifed({ email: loggedUser.userData.provider.profile.email }).then(function (res) {
                    if (!res['migrationFinished']) {
                        _this.existingEmailAlert(loggedUser.userData.provider.profile.email, true);
                    }
                }).catch(function (error) {
                });
            }
            else {
                console.log('loggedUser.email', loggedUser.email);
                if (loggedUser.userData.email == undefined) {
                    this.emailForSocial(loggedUser.userData.provider.profile.email);
                }
            }
        }
    };
    UserEmailServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__utility_utility__["a" /* UtilityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_3__auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], UserEmailServiceProvider);
    return UserEmailServiceProvider;
}());

//# sourceMappingURL=user-email-service.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Required',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': "Minimum length " + validatorValue.requiredLength,
            'onlyName': 'Only characters are allowed.',
            'invalidMobileNumber': "Invalid mobile number."
        };
        return config[validatorName];
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    ValidationService.onlyTextValidator = function (control) {
        // {Firstname, Lastname} - Assert textbox only have text no special char and numbers.
        if (control.value.match(/^[a-zA-Z]*$/)) {
            return null;
        }
        else {
            return { 'onlyName': true };
        }
    };
    ValidationService.mobileNumberValidator = function (control) {
        // Valid mobile number entry.
        // {+1 8087339090}, {+91 8087339090}, {+912 8087339090}, {8087339090}, {0808733909}, {+1-8087339090}, {+91-8087339090}, {+912-8087339090}, {+918087677876}, {+9108087735454}
        if (control.value.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) {
            return null;
        }
        else {
            return { 'invalidMobileNumber': true };
        }
    };
    ValidationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ValidationService);
    return ValidationService;
}());

//# sourceMappingURL=validation-service.js.map

/***/ })

},[296]);
//# sourceMappingURL=main.js.map