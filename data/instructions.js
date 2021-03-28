const TIAA = {
    'has_default_recaptcha': true,
    'multistep': true,
    'submission': {
        'element': {
            'type': 'input',
            'attr': 'id',
            'value': 'personal-details-submit'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'div',
            'attr': 'class',
            'value': 'alert-content',
        },
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'steps': {
        '1': {
            'presence_selector': {
                'type': 'a',
                'attr': 'id',
                'value': 'email-submit'
            },
            'submission': {
                'element': {
                    'type': 'a',
                    'attr': 'id',
                    'value': 'email-submit'
                }
            }
        },
        '2': {
            'presence_selector': {
                'type': 'input',
                'attr': 'id',
                'value': 'boost-user-id'
            },
            'submission': {
                'element': {
                    'type': 'a',
                    'attr': 'id',
                    'value': 'userid-submit'
                }
            },
            'fields': {
                'user_id': {
                    'label': 'user_id',
                    'required': true,
                    'multifield': false,
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'boost-user-id',
                        'event': 'touch'
                    }
                }
            }
        },
        '3': {
            'presence_selector': {
                'type': 'input',
                'attr': 'id',
                'value': 'boost-password'
            },
            'submission': {
                'element': {
                    'type': 'a',
                    'attr': 'id',
                    'value': 'password-submit'
                }
            },
            'fields': {
                'password': {
                    'required': true,
                    'multifield': false,
                    'label': 'password',
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'boost-password',
                        'event': 'touch'
                    }
                }
            }
        },
        '4': {
            'presence_selector': {
                'type': 'input',
                'attr': 'id',
                'value': 'boost-confirm-password'
            },
            'submission': {
                'element': {
                    'type': 'a',
                    'attr': 'id',
                    'value': 'confirm-password-submit'
                }
            },
            'fields': {
                'confirm_password': {
                    'required': true,
                    'multifield': false,
                    'label': 'confirm_password',
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'boost-confirm-password',
                        'event': 'touch'
                    }
                }
            }
        },
        '5': {
            'presence_selector': {
                'type': 'input',
                'attr': 'id',
                'value': 'boost-validated-last-four-ssn-input',
            },
            'fields': {
                'last_name': {
                    'required': true,
                    'multifield': false,
                    'label': 'last_name',
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'boost-last-name',
                        'event': 'touch'
                    }
                },
                'dob': {
                    'required': true,
                    'multifield': false,
                    'format': 'MM/DD/YYYY',
                    'label': 'dob',
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'boost-dob',
                        'event': 'touch'
                    }
                },
                'ssn': {
                    'required': true,
                    'multifield': false,
                    'label': 'ssn',
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'boost-validated-last-four-ssn-input',
                        'digits': 4,
                        'event': 'touch'
                    }
                },
            }
        },
    },
}


const FIDELITY = {
    'has_default_recaptcha': false,
    'multistep': false,
    'presence_selector': {
        'type': 'form',
        'attr': 'id',
        'value': 'identifyUserInitStep'
    },
    'submission': {
        'element': {
            'type': 'button',
            'attr': 'class',
            'value': 'submit'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'span',
            'attr': 'class',
            'value': 'fs-error-msg',
        },
        'expected_message': 'not match our records',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'fields': {
        'ssn': {
            'required': true,
            'label': 'ssn',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'ssn',
                'digits': 4
            },
        },
        'first_name': {
            'required': true,
            'multifield': false,
            'label': 'first_name',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'firstName'
            }
        },
        'last_name': {
            'required': true,
            'multifield': false,
            'label': 'last_name',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'lastName'
            }
        },
        'dob': {
            'required': true,
            'multifield': true,
            'format': 'MM/DD/YYYY',
            'label': 'dob',
            'multi_field_fill_element': {
                'month': {
                    'type': 'select',
                    'attr': 'id',
                    'value': 'month',
                    'digits': 2
                },
                'day': {
                    'type': 'input',
                    'attr': 'id',
                    'value': 'day',
                    'digits': 2
                },
                'year': {
                    'type': 'input',
                    'attr': 'id',
                    'value': 'year',
                    'digits': 4
                },
                'extra_fields': {
                    'full_dob_iso': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'birthdateEntered'
                    }
                }
            }
        }
    }
}

const EMPOWER = {
    'has_default_recaptcha': false,
    'multistep': false,
    'presence_selector': {
        'type': 'div',
        'attr': 'id',
        'value': 'registrationContent'
    },
    'submission': {
        'element': {
            'type': 'button',
            'attr': 'id',
            'value': 'login-help-submit'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'div',
            'attr': 'class',
            'value': 'has-error',
        },
        'expected_message': 'not match our records',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'fields': {
        'ssn': {
            'required': true,
            'label': 'ssn',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'ssnInput',
                'digits': 9,
                'event': 'touch'
            },
        },
        'zipcode': {
            'required': true,
            'label': 'zipcode',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'zipCodeInput',
                'event': 'touch'
            },
        },
        'last_name': {
            'required': true,
            'multifield': false,
            'label': 'last_name',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'lastNameInput',
                'event': 'touch'
            }
        },
        'dob': {
            'required': true,
            'multifield': false,
            'format': 'MM/DD/YYYY',
            'label': 'dob',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'dateOfBirth',
                'event': 'touch'
            }
        },
        'street_address_number': {
            'required': true,
            'multifield': false,
            'label': 'street_address_number',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'streetAddressInput',
                'event': 'touch'
            }
        }
    }
}

const VOYA = {
    'has_default_recaptcha': false,
    'multistep': true,
    'submission': {
        'element': {
            'type': 'input',
            'attr': '',
            'value': '[type="submit"]'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'div',
            'attr': 'class',
            'value': 'voya-notification-inner',
        },
        'expected_message': 'not match our records',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'steps': {
        '1': {
            'actions': [
                {
                    'type': 'keyboardPress',
                    'value': 'Tab',
                },
                {
                    'type': 'keyboardPress',
                    'value': 'Tab',
                },
                {
                    'type': 'keyboardPress',
                    'value': 'Tab',
                },
                {
                    'type': 'keyboardPress',
                    'value': 'ArrowDown',
                },
                {
                    'type': 'keyboardPress',
                    'value': 'ArrowDown',
                    'success_criteria': {
                        'element': {
                            'type': 'li',
                            'attr': 'id',
                            'value': 'selectPref-chosen-input-item-item2',
                        }
                    }
                },
                {
                    'type': 'keyboardType',
                    'value': '\n',
                }
            ],
            'success_criteria': {
                'element': {
                    'type': 'input',
                    'attr': 'id',
                    'value': 'dob',
                }
            }
        },
        '2': {
            'fields': {
                'last_name': {
                    'required': true,
                    'multifield': false,
                    'label': 'last_name',
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'lastName',
                        'event': 'touch'
                    }
                },
                'first_name': {
                    'required': true,
                    'multifield': false,
                    'label': 'first_name',
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'firstName',
                        'event': 'touch'
                    }
                },
                'dob': {
                    'required': true,
                    'multifield': false,
                    'format': 'MM/DD/YYYY',
                    'label': 'dob',
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'dob',
                        'event': 'touch'
                    }
                },
                'ssn': {
                    'required': true,
                    'multifield': false,
                    'label': 'ssn',
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'ssn',
                        'digits': 9,
                        'event': 'touch'
                    }
                }
            }
        }
    }
}


const VANGUARD = {
    'has_default_recaptcha': false,
    'multistep': true,
    'submission': {
        'element': {
            'type': 'input',
            'attr': 'id',
            'value': 'validatedInputForm\\:DeckCard1Input'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'span',
            'attr': 'id',
            'value': 'errormessagebox',
        },
        'expected_message': 'not match our records',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'steps': {
        '1': {
            'submission': {
                'element': {
                    'type': 'input',
                    'attr': 'id',
                    'value': 'validatedInputForm\\:termsStartButtonInput',
                    'event': 'click'
                }
            },
            'success_criteria': {
                'element': {
                    'type': 'input',
                    'attr': 'id',
                    'value': 'validatedInputForm\\:tcacceptInput',
                }
            }
        },
        '2': {
            'submission': {
                'element': {
                    'type': 'input',
                    'attr': 'id',
                    'value': 'validatedInputForm\\:tcacceptInput',
                    'event': 'click'
                }
            },
            'success_criteria': {
                'element': {
                    'type': 'input',
                    'attr': 'id',
                    'value': 'validatedInputForm\\:DeckCard1Input',
                }
            },
        },
        '3': {
            'fields': {
                'ssn': {
                    'required': true,
                    'label': 'ssn',
                    'multifield': false,
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'validatedInputForm\\:ssn',
                        'digits': 9,
                    },
                },
                'zipcode': {
                    'required': true,
                    'label': 'zipcode',
                    'multifield': false,
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'validatedInputForm\\:mailAddressZip',
                    },
                },
                'first_name': {
                    'required': true,
                    'multifield': false,
                    'label': 'first_name',
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'validatedInputForm\\:firstName',
                    }
                },
                'last_name': {
                    'required': true,
                    'multifield': false,
                    'label': 'last_name',
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'validatedInputForm\\:lastName',
                    }
                },
                'dob': {
                    'required': true,
                    'multifield': false,
                    'format': 'MM/DD/YYYY',
                    'label': 'dob',
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'validatedInputForm\\:birthDate',
                    }
                },
            }
        },
    },
}



const PRINCIPAL = {
    'has_default_recaptcha': false,
    'multistep': false,
    'submission': {
        'element': {
            'type': 'input',
            'attr': 'id',
            'value': 'continue'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'div',
            'attr': 'id',
            'value': 'error-message',
        },
        'expected_message': 'locate you in our records',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'fields': {
        'ssn': {
            'required': true,
            'label': 'ssn',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'id_number',
                'digits': 9,
                'event': 'touch'
            },
        },
        'zipcode': {
            'required': true,
            'label': 'zipcode',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'postal_code',
                'event': 'touch'
            },
        },
        'first_name': {
            'required': true,
            'multifield': false,
            'label': 'first_name',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'first_name',
                'event': 'touch'
            }
        },
        'last_name': {
            'required': true,
            'multifield': false,
            'label': 'last_name',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'last_name',
                'event': 'touch'
            }
        },
        'dob': {
            'required': true,
            'multifield': false,
            'format': 'MM/DD/YYYY',
            'label': 'dob',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'date_of_birth',
                'event': 'touch'
            }
        },
        'phone_number': {
            'required': true,
            'multifield': false,
            'label': 'phone_number',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'phone_number',
            }
        },
        'checkbox': {
            'required': true,
            'multifield': false,
            'label': 'checkbox',
            'element': {
                'type': 'input',
                'attr': 'id',
                'value': 'econsent',
                'event': 'click'
            }
        },
    }
}


const WELLS_FARGO= {
    'has_default_recaptcha': false,
    'multistep': false,
    'submission': {
        'element': {
            'type': 'button',
            'attr': 'id',
            'value': 'submitForm'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'div',
            'attr': 'id',
            'value': 'errorMessageContainer',
        },
        'expected_message': 'We cannot verify your entry',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'fields': {
        'ssn': {
            'required': true,
            'label': 'ssn',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'ssn',
                'digits': 9,
                'event': 'touch'
            },
        },
        'last_name': {
            'required': true,
            'multifield': false,
            'label': 'last_name',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'lastName',
                'event': 'touch'
            }
        },
        'dob': {
            'required': true,
            'multifield': false,
            'format': 'MM/DD/YYYY',
            'label': 'dob',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'dateOfBirth',
                'event': 'touch'
            }
        },
        'checkbox': {
            'required': true,
            'multifield': false,
            'label': 'checkbox',
            'element': {
                'type': 'input',
                'attr': 'id',
                'value': 'noAccountNumber',
                'event': 'click'
            }
        }
    },

}

const BOA = {
    'has_default_recaptcha': false,
    'multistep': true,
    'submission': {
        'element': {
            'type': 'a',
            'attr': 'id',
            'value': 'SFButton_ConfirmAction',
            'event': 'click'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'div',
            'attr': 'class',
            'value': 'content',
        },
        'expected_message': 'unable to access your account using the information',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'steps': {
        '1': {
            'submission': {
                'element': {
                    'type': 'a',
                    'attr': 'id',
                    'value': 'SFButton_ConfirmAction',
                    'event': 'click'
                }
            },
            'success_criteria': {
                'element': {
                    'type': 'input',
                    'attr': 'id',
                    'value': 'ZIP_txtbox',
                }
            },
            'fields': {
                'ssn': {
                    'required': true,
                    'label': 'ssn',
                    'multifield': false,
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'txtSsnnumber',
                        'digits': 9
                    },
                },
            }
        },
        '2': {
            'fields': {
                'zipcode': {
                    'required': true,
                    'label': 'zipcode',
                    'multifield': false,
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'ZIP_txtbox',
                    },
                },
                'dob': {
                    'required': true,
                    'multifield': false,
                    'format': 'MMDDYYYY',
                    'label': 'dob',
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'maskedDOB_txtbox',
                        'event': 'touch'
                    }
                },
                'city': {
                    'required': true,
                    'multifield': false,
                    'label': 'city',
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'CITY_txtbox',
                    }
                },
                'ssn': {
                    'required': true,
                    'label': 'ssn',
                    'multifield': false,
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'SSN_txtbox',
                        'digits': 9
                    },
                },
            },
        }
    },
}


const PRUDENTIAL = {
    'has_default_recaptcha': false,
    'multistep': false,
    'submission': {
        'element': {
            'type': 'button',
            'attr': '',
            'value': '[type="submit"]',
            'event': 'click'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'div',
            'attr': 'class',
            'value': 'text-danger',
        },
        'expected_message': 'We were unable to verify',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'fields': {
        'ssn': {
            'required': true,
            'label': 'ssn',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': '',
                'value': '[type="password"]',
                'digits': 4,
                'event': 'touch'
            },
        },
        'zipcode': {
            'required': true,
            'label': 'zipcode',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'zipCode',
                'event': 'touch'
            },
        },
        'dob': {
            'required': true,
            'multifield': false,
            'format': 'MMDDYYYY',
            'label': 'dob',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'dob',
                'event': 'touch'
            }
        },
    }
}


const TRANSAMERICA = {
    'has_default_recaptcha': false,
    'multistep': false,
    'presence_selector': {
        'type': 'input',
        'attr': 'id',
        'value': 'ssn',
    },
    'submission': {
        'element': {
            'type': 'button',
            'attr': 'class',
            'value': 'ta-button',
            'event': 'click'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'div',
            'attr': 'id',
            'value': 'ol_reg_error_support',
        },
        'expected_message': 'We were not able to verify your identity',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'fields': {
        'last_name': {
            'required': true,
            'multifield': false,
            'label': 'last_name',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'lastName',
                'event': 'touch'
            }
        },
        'first_name': {
            'required': true,
            'multifield': false,
            'label': 'first_name',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'firstName',
                'event': 'touch'
            }
        },
        'ssn': {
            'required': true,
            'label': 'ssn',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'ssn',
                'digits': 9,
                'event': 'touch'
            },
        },
        'zipcode': {
            'required': true,
            'label': 'zipcode',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': '',
                'value': '[formcontrolname="zip"]',
                'event': 'touch'
            },
        },
        'dob': {
            'required': true,
            'multifield': false,
            'format': 'MMDDYYYY',
            'label': 'dob',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'dob',
                'event': 'touch'
            }
        },
        'phone_number': {
            'required': true,
            'multifield': false,
            'label': 'phone_number',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'mobileNumber',
                'event': 'touch'
            }
        },
        'email': {
            'required': true,
            'multifield': false,
            'label': 'email',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'emailAddress',
                'event': 'touch'
            }
        },
        'address_line1': {
            'required': true,
            'multifield': false,
            'label': 'address_line1',
            'fill_element': {
                'type': 'input',
                'attr': '',
                'value': '[formcontrolname="addressLine1"]',
                'event': 'touch'
            }
        },
        'city': {
            'required': true,
            'multifield': false,
            'label': 'city',
            'fill_element': {
                'type': 'input',
                'attr': '',
                'value': '[formcontrolname="city"]',
                'event': 'touch'
            }
        },
        'state': {
            'required': true,
            'multifield': false,
            'label': 'state',
            'actions': [
                {
                    'action_type': 'dropdown',
                    'type': 'div',
                    'attr': 'class',
                    'value': 'mat-select-arrow-wrapper'
                },
                {
                    'action_type': 'select_dropdown',
                    'field_value': 'full_state_name',
                    'type': 'mat-option',
                    'attr': 'id'
                },
            ]

        }
    }
}

const ROWE_PRICE = {
    'has_default_recaptcha': false,
    'multistep': false,
    'submission': {
        'element': {
            'type': 'button',
            'attr': '',
            'value': '[type="submit"]',
            'event': 'click'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'div',
            'attr': 'class',
            'value': 'Errors-module--error-wrapper',
        },
        'expected_message': 'We cannot find this account',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'fields': {
        'ssn': {
            'required': true,
            'label': 'ssn',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'ssn-input',
                'digits': 9,
                'event': 'touch'
            },
        },
        'zipcode': {
            'required': true,
            'label': 'zipcode',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'zip-input-input',
                'event': 'touch'
            },
        },
        'dob': {
            'required': true,
            'multifield': false,
            'format': 'MMDDYYYY',
            'label': 'dob',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'dob-input',
                'event': 'touch'
            }
        },
    }
}

const SCHWAB = {
    'has_default_recaptcha': false,
    'multistep': false,
    'submission': {
        'element': {
            'type': 'input',
            'attr': 'id',
            'value': 'SubmitSSN',
            'event': 'click'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'span',
            'attr': 'id',
            'value': 'ctl00_contentMain_ctlError_ErrorAttheTopLabel',
        },
        'expected_message': 'We were unable to validate your selections',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'fields': {
        'ssn': {
            'required': true,
            'label': 'ssn',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'ctl00_contentMain_txtSSN',
                'digits': 9,
                // 'event': 'touch'
            },
        },
        'last_name': {
            'required': true,
            'multifield': false,
            'label': 'last_name',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'ctl00_contentMain_txtLastName',
                // 'event': 'touch'
            }
        },
        'zipcode': {
            'required': true,
            'label': 'zipcode',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'ctl00_contentMain_txtZipCode',
                // 'event': 'touch'
            },
        },
        'dob': {
            'required': true,
            'multifield': false,
            'format': 'MM/DD/YYYY',
            'label': 'dob',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'ctl00_contentMain_txtDOB',
                // 'event': 'touch'
            }
        },
    }
}


const MASSMUTUAL = {
    'has_default_recaptcha': false,
    'multistep': false,
    'submission': {
        'element': {
            'type': 'button',
            'attr': 'id',
            'value': 'individual-submit',
            'event': 'click'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'span',
            'attr': 'id',
            'value': 'ctl00_contentMain_ctlError_ErrorAttheTopLabel',
        },
        'expected_message': 'We were unable to validate your selections',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'fields': {
        'ssn': {
            'required': true,
            'label': 'ssn',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'ssn-field',
                'digits': 9,
                // 'event': 'touch'
            },
        },
        'first_name': {
            'required': true,
            'multifield': false,
            'label': 'first_name',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'firstName',
                // 'event': 'touch'
            }
        },
        'last_name': {
            'required': true,
            'multifield': false,
            'label': 'last_name',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'lastName',
                // 'event': 'touch'
            }
        },
        'dob': {
            'required': true,
            'multifield': false,
            'format': 'MM/DD/YYYY',
            'label': 'dob',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'date-of-birth',
                // 'event': 'touch'
            }
        },
        'checkbox': {
            'required': true,
            'multifield': false,
            'label': 'checkbox',
            'element': {
                'type': 'input',
                'attr': 'id',
                'value': 'individual-consent',
                'event': 'click'
            }
        },
    }
}

const NATIONWIDE = {
    'has_default_recaptcha': false,
    'multistep': true,
    'submission': {
        'element': {
            'type': 'button',
            'attr': 'id',
            'value': 'individual-info-find-account',
            'event': 'click'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'div',
            'attr': 'id',
            'value': 'page-level-error-message',
        },
        'expected_message': 'We cannot locate an account',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'steps': {
        '1': {
            'submission': {
                'element': {
                    'type': 'button',
                    'attr': 'id',
                    'value': 'account-type-continue',
                    'event': 'click'
                }
            },
            'success_criteria': {
                'element': {
                    'type': 'input',
                    'attr': 'id',
                    'value': 'your-info-first-name',
                }
            },
            'fields': {
                'checkbox': {
                    'required': true,
                    'label': 'checkbox',
                    'multifield': false,
                    'element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'account-type-individual-radio',
                    },
                },
            }
        },
        '2': {
            'fields': {
                'first_name': {
                    'label': 'first_name',
                    'required': true,
                    'multifield': false,
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'your-info-first-name',
                        'event': 'touch',
                    }
                },
                'last_name': {
                    'label': 'last_name',
                    'required': true,
                    'multifield': false,
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'your-info-last-name',
                        'event': 'touch',
                    }
                },
                'zipcode': {
                    'required': true,
                    'label': 'zipcode',
                    'multifield': false,
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'your-info-zip-code',
                        'event': 'touch',
                    },
                },
            }
        }
    }
}


const ADP = { // need to work on dob dropdowns
    'has_default_recaptcha': false,
    'multistep': true,
    'submission': {
        'element': {
            'type': 'button',
            'attr': 'id',
            'value': 'individual-info-find-account',
            'event': 'click'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'div',
            'attr': 'id',
            'value': 'page-level-error-message',
        },
        'expected_message': 'We cannot locate an account',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'steps': {
        '1': {
            'submission': {
                'element': {
                    'type': 'button',
                    'attr': 'id',
                    'value': 'findMeV_findmeButton',
                    'event': 'click'
                }
            },
            'success_criteria': {
                'element': {
                    'type': 'input',
                    'attr': '',
                    'value': '[value="piiSearch"]',
                }
            }
        },
        '2': {
            'fields': {
                'checkbox': {
                    'required': true,
                    'label': 'checkbox',
                    'multifield': false,
                    'element': {
                        'type': 'input',
                        'attr': '',
                        'value': '[value="piiSearch"]',
                    },
                }
            },
            'success_criteria': {
                'element': {
                    'type': 'input',
                    'attr': 'id',
                    'value': 'findMeV_ssn_textBox',
                }
            }
        },
        '3': {
            'fields': {
                'first_name': {
                    'label': 'first_name',
                    'required': true,
                    'multifield': false,
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'findMeV_fn_textBox',
                        'event': 'touch',
                    }
                },
                'last_name': {
                    'label': 'last_name',
                    'required': true,
                    'multifield': false,
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'findMeV_ln_textBox',
                        'event': 'touch',
                    }
                },
                'zipcode': {
                    'required': true,
                    'label': 'zipcode',
                    'multifield': false,
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'your-info-zip-code',
                        'event': 'touch',
                    },
                },
            }
        }
    }
}

const AMERICANFUNDS = {
    'has_default_recaptcha': false,
    'multistep': false,
    'presence_selector': {
        'type': 'div',
        'attr': 'id',
        'value': 'registrationContent'
    },
    'submission': {
        'element': {
            'type': 'button',
            'attr': 'id',
            'value': 'login-help-submit'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'div',
            'attr': 'class',
            'value': 'has-error',
        },
        'expected_message': 'not match our records',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'fields': {
        'ssn': {
            'required': true,
            'label': 'ssn',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'ssnInput',
                'digits': 9,
                'event': 'touch'
            },
        },
        'zipcode': {
            'required': true,
            'label': 'zipcode',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'zipCodeInput',
                'event': 'touch'
            },
        },
        'last_name': {
            'required': true,
            'multifield': false,
            'label': 'last_name',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'lastNameInput',
                'event': 'touch'
            }
        },
        'dob': {
            'required': true,
            'multifield': false,
            'format': 'MM/DD/YYYY',
            'label': 'dob',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'dateOfBirth',
                'event': 'touch'
            }
        },
        'street_address_number': {
            'required': true,
            'multifield': false,
            'label': 'street_address_number',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'streetAddressInput',
                'event': 'touch'
            }
        }
    }
}

const ONEAMERICA = {
    'has_default_recaptcha': false,
    'multistep': false,
    'presence_selector': {
        'type': 'div',
        'attr': 'id',
        'value': 'registrationContent'
    },
    'submission': {
        'element': {
            'type': 'input',
            'attr': '',
            'value': '[value="Next"]'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'li',
            'attr': 'class',
            'value': 'error',
        },
        'expected_message': 'unable to verify',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'fields': {
        'checkbox': {
            'required': true,
            'multifield': false,
            'label': 'checkbox',
            'element': {
                'type': 'input',
                'attr': '',
                'value': '[value="SSN"]',
                'event': 'click'
            }
        },
        'ssn': {
            'required': true,
            'label': 'ssn',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': '',
                'value': '[name="form:taxId"]',
                'digits': 9,
            },
        },
    }
}

const AXA = {
    'has_default_recaptcha': false,
    'multistep': false,
    'submission': {
        'element': {
            'type': 'button',
            'attr': 'class',
            'value': 'btn-primary'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'div',
            'attr': 'class',
            'value': 'alert-danger',
        },
        'expected_message': 'unable to verify',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'fields': {
        'ssn': {
            'required': true,
            'label': 'ssn',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'govid',
                'digits': 9,
                'event': 'touch'
            },
        },
        'email': {
            'required': true,
            'multifield': false,
            'label': 'email',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'email',
                'event': 'touch'
            }
        },
        'dob': {
            'required': true,
            'multifield': false,
            'format': 'MM/DD/YYYY',
            'label': 'dob',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'dpicker',
                'event': 'touch'
            }
        },
    }
}

const METLIFE = {
    'has_default_recaptcha': false,
    'multistep': false,
    'presence_selector': {
        'type': 'div',
        'attr': 'id',
        'value': 'registrationContent'
    },
    'submission': {
        'element': {
            'type': 'button',
            'attr': 'id',
            'value': 'login-help-submit'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'div',
            'attr': 'class',
            'value': 'has-error',
        },
        'expected_message': 'not match our records',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'fields': {
        'ssn': {
            'required': true,
            'label': 'ssn',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'ssnInput',
                'digits': 9,
                'event': 'touch'
            },
        },
        'zipcode': {
            'required': true,
            'label': 'zipcode',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'zipCodeInput',
                'event': 'touch'
            },
        },
        'last_name': {
            'required': true,
            'multifield': false,
            'label': 'last_name',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'lastNameInput',
                'event': 'touch'
            }
        },
        'dob': {
            'required': true,
            'multifield': false,
            'format': 'MM/DD/YYYY',
            'label': 'dob',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'dateOfBirth',
                'event': 'touch'
            }
        },
        'street_address_number': {
            'required': true,
            'multifield': false,
            'label': 'street_address_number',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'streetAddressInput',
                'event': 'touch'
            }
        }
    }
}

const CUNA = {
    'has_default_recaptcha': false,
    'multistep': false,
    'submission': {
        'element': {
            'type': 'i',
            'attr': 'class',
            'value': 'navigation-arrow-right'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'div',
            'attr': '',
            'value': '[ng-message="notFound"]',
        },
        'expected_message': 'unable to locate your records',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'fields': {
        'ssn': {
            'required': true,
            'label': 'ssn',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': '',
                'value': '[name="Social Security number"]',
                'digits': 9,
                'event': 'touch'
            },
        },
        'dob': {
            'required': true,
            'multifield': false,
            'format': 'MM/DD/YYYY',
            'label': 'dob',
            'fill_element': {
                'type': 'input',
                'attr': '',
                'value': '[name="Date of birth"]',
                'event': 'touch'
            }
        }
    }
}

const MUTUALAMERICA = {
    'has_default_recaptcha': false,
    'multistep': false,
    'presence_selector': {
        'type': 'div',
        'attr': 'id',
        'value': 'validate-user-data'
    },
    'submission': {
        'element': {
            'type': 'button',
            'attr': 'class',
            'value': 'btn-primary'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'div',
            'attr': 'class',
            'value': 'identity-error-message', // this is always present on page, need to check if viewable by user
        },
        'expected_message': 'unable to verify who you are',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'fields': {
        'ssn': {
            'required': true,
            'label': 'ssn',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'ssn-input',
                'digits': 4,
                'event': 'touch'
            },
        },
        'zipcode': {
            'required': true,
            'label': 'zipcode',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'zip-code-input',
                'event': 'touch'
            },
        },
        'last_name': {
            'required': true,
            'multifield': false,
            'label': 'last_name',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'lastname-input',
                'event': 'touch'
            }
        },
        'dob': {
            'required': true,
            'multifield': false,
            'format': 'MM/DD/YYYY',
            'label': 'dob',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'dob-input',
                'event': 'touch'
            }
        }
    }
}

const JPMORGAN = {
    'has_default_recaptcha': false,
    'multistep': false,
    'presence_selector': {
        'type': 'div',
        'attr': 'id',
        'value': 'registrationContent'
    },
    'submission': {
        'element': {
            'type': 'button',
            'attr': 'id',
            'value': 'login-help-submit'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'div',
            'attr': 'class',
            'value': 'has-error',
        },
        'expected_message': 'not match our records',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'fields': {
        'ssn': {
            'required': true,
            'label': 'ssn',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'ssnInput',
                'digits': 9,
                'event': 'touch'
            },
        },
        'zipcode': {
            'required': true,
            'label': 'zipcode',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'zipCodeInput',
                'event': 'touch'
            },
        },
        'last_name': {
            'required': true,
            'multifield': false,
            'label': 'last_name',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'lastNameInput',
                'event': 'touch'
            }
        },
        'dob': {
            'required': true,
            'multifield': false,
            'format': 'MM/DD/YYYY',
            'label': 'dob',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'dateOfBirth',
                'event': 'touch'
            }
        },
        'street_address_number': {
            'required': true,
            'multifield': false,
            'label': 'street_address_number',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'streetAddressInput',
                'event': 'touch'
            }
        }
    }
}


const CONRAD = {
    'has_default_recaptcha': false,
    'multistep': true,
    'submission': {
        'element': {
            'type': 'a',
            'attr': 'id',
            'value': 'ctl00_ContentPlaceHolder1_btnNext_Step1',
            'event': 'click'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'span',
            'attr': 'id',
            'value': 'ctl00_ContentPlaceHolder1_lblErrorMessage',
        },
        'expected_message': 'unable to validate your information',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'steps': {
        '1': {
            'fields': {
                'checkbox': {
                    'required': true,
                    'label': 'checkbox',
                    'multifield': false,
                    'element': {
                        'type': 'input',
                        'attr': '',
                        'value': '[value="rbRetirementPlan"]',
                    },
                }
            },
            'success_criteria': {
                'element': {
                    'type': 'input',
                    'attr': 'id',
                    'value': 'ctl00_ContentPlaceHolder1_txtSSN',
                }
            }
        },
        '2': {
            'fields': {
                'first_name': {
                    'label': 'first_name',
                    'required': true,
                    'multifield': false,
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'ctl00_ContentPlaceHolder1_txtFirstName',
                        'event': 'touch',
                    }
                },
                'last_name': {
                    'label': 'last_name',
                    'required': true,
                    'multifield': false,
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'ctl00_ContentPlaceHolder1_txtLastName',
                        'event': 'touch',
                    }
                },
                'dob': {
                    'required': true,
                    'multifield': false,
                    'format': 'MMDDYYYY',
                    'label': 'dob',
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'ctl00_ContentPlaceHolder1_txtDOB',
                    }
                },
                'ssn': {
                    'required': true,
                    'label': 'ssn',
                    'multifield': false,
                    'fill_element': {
                        'type': 'input',
                        'attr': 'id',
                        'value': 'ctl00_ContentPlaceHolder1_txtSSN',
                        'digits': 9,
                        'event': 'touch'
                    },
                },
            }
        }
    }
}


const JULY = {
    'has_default_recaptcha': false,
    'multistep': false,
    'submission': {
        'element': {
            'type': 'button',
            'attr': '',
            'value': '[type="button"]',
            'event': 'click'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'div',
            'attr': 'class',
            'value': 'error-message',
        },
        'expected_message': 'does not match the information we have on file',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'fields': {
        'ssn': {
            'required': true,
            'label': 'ssn',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'SSN2',
                'digits': 9,
                'event': 'touch'
            },
        },
        'zipcode': {
            'required': true,
            'label': 'zipcode',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'ZIPCODE2',
                'event': 'touch'
            },
        },
        'dob': {
            'required': true,
            'multifield': false,
            'format': 'MM/DD/YYYY',
            'label': 'dob',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'BIRTHDATE2',
                'event': 'touch'
            }
        },
    }
}

const SECURITY_FINANCIAL = {
    'has_default_recaptcha': false,
    'multistep': false,
    'submission': {
        'element': {
            'type': 'input',
            'attr': 'id',
            'value': 'edit-next',
            'event': 'click'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'span',
            'attr': 'class',
            'value': 'status--error',
        },
        'expected_message': 'do not have a match for the information you have entered',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'fields': {
        'last_name': {
            'required': true,
            'multifield': false,
            'label': 'last_name',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'edit-last-name',
            }
        },
        'first_name': {
            'required': true,
            'multifield': false,
            'label': 'first_name',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'edit-first-name',
            }
        },
        'ssn': {
            'required': true,
            'label': 'ssn',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'edit-social-security-number',
                'digits': 4,
            },
        },
        'dob': {
            'required': true,
            'multifield': false,
            'format': 'MMDDYYYY',
            'label': 'dob',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'edit-date-of-birth-date',
                'event': 'touch'
            }
        },
        'email': {
            'required': true,
            'multifield': false,
            'label': 'email',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'edit-email',
            }
        },
        'email_confirm': {
            'required': true,
            'multifield': false,
            'label': 'email_confirm',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'edit-confirm-email',
            }
        },
        'user_id': {
            'label': 'user_id',
            'required': true,
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'edit-username',
                'event': 'touch'
            }
        },
        'phone_number': {
            'required': true,
            'multifield': false,
            'label': 'phone_number',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'edit-contract-number',
            }
        },
    }
}

const SLAVIC = {
    'has_default_recaptcha': false,
    'multistep': false,
    'submission': {
        'element': {
            'type': 'button',
            'attr': 'class',
            'value': 'btn-cta'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'div',
            'attr': 'class',
            'value': 'warning-message',
        },
        'expected_message': 'could not find you in our system',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'fields': {
        'ssn': {
            'required': true,
            'label': 'ssn',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': '',
                'value': '[name="ssn"]',
                'digits': 5,
                'event': 'touch'
            },
        },
        'dob': {
            'required': true,
            'multifield': false,
            'format': 'MMDDYYYY',
            'label': 'dob',
            'fill_element': {
                'type': 'input',
                'attr': '',
                'value': '[name="dob"]',
                'event': 'touch'
            }
        },
        'zipcode': {
            'required': true,
            'label': 'zipcode',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': '',
                'value': '[name="zipcode"]',
                'event': 'touch'
            },
        },
    }
}

const JOHN_HANCOCK = {
    'has_default_recaptcha': false,
    'multistep': false,
    'submission': {
        'element': {
            'type': 'input',
            'attr': '',
            'value': '[type="submit"]'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'div',
            'attr': 'p',
            'value': 'isNotValidMSG',
        },
        'expected_message': 'does not match what we have on file',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'fields': {
        'ssn': {
            'required': true,
            'label': 'ssn',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'ssn',
                'digits': 9,
                'event': 'touch'
            },
        },
        'dob': {
            'required': true,
            'multifield': false,
            'format': 'MMDDYYYY',
            'label': 'dob',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'DOB',
                'event': 'touch'
            }
        },
        'last_name': {
            'required': true,
            'multifield': false,
            'label': 'last_name',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'LName',
                'event': 'touch'
            }
        },
    }
}

const EPIC = {
    'has_default_recaptcha': false,
    'multistep': false,
    'submission': {
        'element': {
            'type': 'epic-button',
            'attr': '',
            'value': '[message="LOGIN.login"]'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'mat-error',
            'attr': 'class',
            'value': 'mat-error',
        },
        'expected_message': 'Invalid credentials',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'fields': {
        'ssn': {
            'required': true,
            'label': 'ssn',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'mat-input-0',
                'digits': 9,
                'event': 'touch'
            },
        },
        'dob': {
            'required': true,
            'multifield': false,
            'format': 'MMDDYYYY',
            'label': 'dob',
            'fill_element': {
                'type': 'input',
                'attr': 'id',
                'value': 'mat-input-1',
                'event': 'touch'
            }
        },
    }
}


const USI = {
    'has_default_recaptcha': false,
    'multistep': false,
    'presence_selector': {
        'type': 'div',
        'attr': 'class',
        'value': 'login-main'
    },
    'submission': {
        'element': {
            'type': 'button',
            'attr': '',
            'value': '[data-qat="login-button"]'
        }
    },
    'failing_criteria': {
        'element': {
            'type': 'div',
            'attr': '',
            'value': '[data-qat="error-message"]',
        },
        'expected_message': 'unable to complete your login',
        'property': {
            'hidden': false,
            'empty': false
        }
    },
    'fields': {
        'ssn': {
            'required': true,
            'label': 'ssn',
            'multifield': false,
            'fill_element': {
                'type': 'input',
                'attr': '',
                'value': '[data-qat="username-input"]',
                'digits': 9,
                'event': 'touch'
            },
        },
        'dob': {
            'required': true,
            'multifield': false,
            'format': 'MMDDYYYY',
            'label': 'dob',
            'fill_element': {
                'type': 'input',
                'attr': '',
                'value': '[data-qat="password-input"]',
                'event': 'touch'
            }
        },
    }
}
const MONTHS = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
]

module.exports = {
    TIAA,
    FIDELITY,
    EMPOWER,
    VANGUARD,
    VOYA,
    PRINCIPAL,
    WELLS_FARGO,
    BOA,
    PRUDENTIAL,
    ROWE_PRICE,
    SCHWAB,
    MASSMUTUAL,
    NATIONWIDE,
    AMERICANFUNDS,
    ONEAMERICA,
    AXA,
    METLIFE,
    CUNA,
    MUTUALAMERICA,
    JPMORGAN,
    CONRAD,
    JULY,
    SECURITY_FINANCIAL,
    SLAVIC,
    JOHN_HANCOCK,
    EPIC,
    USI,
    TRANSAMERICA
}