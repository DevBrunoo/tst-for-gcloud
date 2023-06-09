.. This file is automatically generated. Do not edit this file directly.

Cloud Healthcare API Python Samples
===============================================================================

.. image:: https://gstatic.com/cloudssh/images/open-btn.png
   :target: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/GoogleCloudPlatform/python-docs-samples&page=editor&open_in_editor=healthcare/api-client/v1/consent/README.rst


This directory contains samples for Cloud Healthcare API. `Cloud Healthcare API`_ implements healthcare-native protocols and formats to accelerate ingestion, storage, analysis, and integration of healthcare data with cloud-based applications.




.. _Cloud Healthcare API: https://cloud.google.com/healthcare-api/docs

To run the sample, you need to enable the API at: https://console.cloud.google.com/apis/library/healthcare.googleapis.com


To run the sample, you need to have the following roles:

* `Healthcare Consent Store Administrator`
* `Healthcare Attribute Definition Editor`



Setup
-------------------------------------------------------------------------------


Authentication
++++++++++++++

This sample requires you to have authentication setup. Refer to the
`Authentication Getting Started Guide`_ for instructions on setting up
credentials for applications.

.. _Authentication Getting Started Guide:
    https://cloud.google.com/docs/authentication/getting-started

Install Dependencies
++++++++++++++++++++

#. Clone python-docs-samples and change directory to the sample directory you want to use.

    .. code-block:: bash

        $ git clone https://github.com/GoogleCloudPlatform/python-docs-samples.git

#. Install `pip`_ and `virtualenv`_ if you do not already have them. You may want to refer to the `Python Development Environment Setup Guide`_ for Google Cloud Platform for instructions.

   .. _Python Development Environment Setup Guide:
       https://cloud.google.com/python/setup

#. Create a virtualenv. Samples are compatible with Python 2.7 and 3.4+.

    .. code-block:: bash

        $ virtualenv env
        $ source env/bin/activate

#. Install the dependencies needed to run the samples.

    .. code-block:: bash

        $ pip install -r requirements.txt

.. _pip: https://pip.pypa.io/
.. _virtualenv: https://virtualenv.pypa.io/

Samples
-------------------------------------------------------------------------------

Consent
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. image:: https://gstatic.com/cloudssh/images/open-btn.png
   :target: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/GoogleCloudPlatform/python-docs-samples&page=editor&open_in_editor=healthcare/api-client/v1/consent/consent_stores.py,healthcare/api-client/v1/consent/README.rst




To run this sample:

.. code-block:: bash

    $ python consent_stores.py

    usage: consent_stores.py [-h] [--project_id PROJECT_ID] [--location LOCATION]
                             [--dataset_id DATASET_ID]
                             [--consent_store_id CONSENT_STORE_ID]
                             [--default_consent_ttl DEFAULT_CONSENT_TTL]
                             [--export_format {FORMAT_UNSPECIFIED,consent,JSON_BIGQUERY_IMPORT}]
                             [--member MEMBER] [--role ROLE]
                             {create-consent-store,delete-consent-store,get-consent-store,list-consent-stores,patch-consent-store,get_iam_policy,set_iam_policy}
                             ...

    positional arguments:
      {create-consent-store,delete-consent-store,get-consent-store,list-consent-stores,patch-consent-store,get_iam_policy,set_iam_policy}
        create-consent-store
                            Creates a new consent store within the parent dataset.
                            See https://github.com/GoogleCloudPlatform/python-
                            docs-samples/tree/main/healthcare/api-
                            client/v1/consent before running the sample.
        delete-consent-store
                            Deletes the specified consent store. See
                            https://github.com/GoogleCloudPlatform/python-docs-
                            samples/tree/main/healthcare/api-client/v1/consent
                            before running the sample.
        get-consent-store   Gets the specified consent store. See
                            https://github.com/GoogleCloudPlatform/python-docs-
                            samples/tree/main/healthcare/api-client/v1/consent
                            before running the sample.
        list-consent-stores
                            Lists the consent stores in the given dataset. See
                            https://github.com/GoogleCloudPlatform/python-docs-
                            samples/tree/main/healthcare/api-client/v1/consent
                            before running the sample.
        patch-consent-store
                            Updates the consent store. See
                            https://github.com/GoogleCloudPlatform/python-docs-
                            samples/tree/main/healthcare/api-client/v1/consent
                            before running the sample.
        get_iam_policy      Gets the IAM policy for the specified consent store.
                            See https://github.com/GoogleCloudPlatform/python-
                            docs-samples/tree/main/healthcare/api-
                            client/v1/consent before running the sample.
        set_iam_policy      Sets the IAM policy for the specified consent store. A
                            single member will be assigned a single role. A member
                            can be any of: - allUsers, that is, anyone -
                            allAuthenticatedUsers, anyone authenticated with a
                            Google account - user:email, as in
                            'user:somebody@example.com' - group:email, as in
                            'group:admins@example.com' - domain:domainname, as in
                            'domain:example.com' - serviceAccount:email, as in
                            'serviceAccount:my-other-
                            app@appspot.gserviceaccount.com' A role can be any IAM
                            role, such as 'roles/viewer', 'roles/owner', or
                            'roles/editor' See
                            https://github.com/GoogleCloudPlatform/python-docs-
                            samples/tree/main/healthcare/api-client/v1/consent
                            before running the sample.

    optional arguments:
      -h, --help            show this help message and exit
      --project_id PROJECT_ID
                            GCP project name
      --location LOCATION   GCP location
      --dataset_id DATASET_ID
                            Name of dataset
      --consent_store_id CONSENT_STORE_ID
                            Name of consent store
      --default_consent_ttl DEFAULT_CONSENT_TTL
                            Default time-to-live (TTL) of consents in the consent
                            store.
      --export_format {FORMAT_UNSPECIFIED,consent,JSON_BIGQUERY_IMPORT}
                            Specifies the output format. If the format is
                            unspecified, the default functionality is to export to
                            consent.
      --member MEMBER       Member to add to IAM policy (e.g.
                            "domain:example.com")
      --role ROLE           IAM Role to give to member (e.g. "roles/viewer")



AttributeDefinitions
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. image:: https://gstatic.com/cloudssh/images/open-btn.png
   :target: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/GoogleCloudPlatform/python-docs-samples&page=editor&open_in_editor=healthcare/api-client/v1/consent/attribute_definitions.py,healthcare/api-client/v1/consent/README.rst




To run this sample:

.. code-block:: bash

    $ python attribute_definitions.py

    usage: attribute_definitions.py [-h] [--project_id PROJECT_ID]
                                    [--location LOCATION]
                                    [--dataset_id DATASET_ID]
                                    [--consent_store_id CONSENT_STORE_ID]
                                    [--resource_attribute_definition_id RESOURCE_ATTRIBUTE_DEFINITION_ID]
                                    [--request_attribute_definition_id REQUEST_ATTRIBUTE_DEFINITION_ID]
                                    [--attribute_definition_id ATTRIBUTE_DEFINITION_ID]
                                    [--description DESCRIPTION]
                                    {create-resource-attribute-definition,create-request-attribute-definition,get-attribute-definition,list-attribute-definitions,patch-attribute-definition,delete-attribute-definition}
                                    ...

    positional arguments:
      {create-resource-attribute-definition,create-request-attribute-definition,get-attribute-definition,list-attribute-definitions,patch-attribute-definition,delete-attribute-definition}
        create-resource-attribute-definition
                            Creates a RESOURCE attribute definition. A RESOURCE
                            attribute is an attribute whose value is determined by
                            the properties of the data or action. See
                            https://github.com/GoogleCloudPlatform/python-docs-
                            samples/tree/main/healthcare/api-client/v1/consent
                            before running the sample.
        create-request-attribute-definition
                            Creates a REQUEST attribute definition. A REQUEST
                            attribute is an attribute whose value is determined by
                            the requester's identity or purpose. See
                            https://github.com/GoogleCloudPlatform/python-docs-
                            samples/tree/main/healthcare/api-client/v1/consent
                            before running the sample.
        get-attribute-definition
                            Gets the specified attribute definition. See
                            https://github.com/GoogleCloudPlatform/python-docs-
                            samples/tree/main/healthcare/api-client/v1/consent
                            before running the sample.
        list-attribute-definitions
                            Lists the attribute definitions in the given consent
                            store. See
                            https://github.com/GoogleCloudPlatform/python-docs-
                            samples/tree/main/healthcare/api-client/v1/consent
                            before running the sample.
        patch-attribute-definition
                            Updates the attribute definition. See
                            https://github.com/GoogleCloudPlatform/python-docs-
                            samples/tree/main/healthcare/api-client/v1/consent
                            before running the sample.
        delete-attribute-definition
                            Deletes the specified attribute definition. See
                            https://github.com/GoogleCloudPlatform/python-docs-
                            samples/tree/main/healthcare/api-client/v1/consent
                            before running the sample.

    optional arguments:
      -h, --help            show this help message and exit
      --project_id PROJECT_ID
                            GCP cloud project name
      --location LOCATION   GCP location
      --dataset_id DATASET_ID
                            ID of dataset
      --consent_store_id CONSENT_STORE_ID
                            ID of consent store
      --resource_attribute_definition_id RESOURCE_ATTRIBUTE_DEFINITION_ID
                            ID of a RESOURCE attribute definition
      --request_attribute_definition_id REQUEST_ATTRIBUTE_DEFINITION_ID
                            ID of a REQUEST attribute definition
      --attribute_definition_id ATTRIBUTE_DEFINITION_ID
                            ID of an attribute definition
      --description DESCRIPTION
                            A description of an attribute





The client library
-------------------------------------------------------------------------------

This sample uses the `Google Cloud Client Library for Python`_.
You can read the documentation for more details on API usage and use GitHub
to `browse the source`_ and  `report issues`_.

.. _Google Cloud Client Library for Python:
    https://googlecloudplatform.github.io/google-cloud-python/
.. _browse the source:
    https://github.com/GoogleCloudPlatform/google-cloud-python
.. _report issues:
    https://github.com/GoogleCloudPlatform/google-cloud-python/issues


.. _Google Cloud SDK: https://cloud.google.com/sdk/
