
const roles = [
    {
        id: '0093f6b3-0e37-481f-b33d-5d1136a43a46',
        user_id: '3880bcd5-c81e-4c6d-b6b7-f0caf739d82b',
        role_id: 'cfaf4dd8-9892-4b9b-9c6f-36fcc56bce56',
        application_id: '80c357d4-fdb0-4e6d-a5c5-89fda0ddefa5',

        role: {
            id: 'cfaf4dd8-9892-4b9b-9c6f-36fcc56bce56',
            name: 'juanchin',
            application_type: 'APPLICATION_DM'
        }
    },
    {
        id: '07105492-4412-43a1-9ff3-8faa27fbb555',
        user_id: '3880bcd5-c81e-4c6d-b6b7-f0caf739d82b',
        role_id: '3bd8a3c3-b93f-45ef-8cba-3bfa000782a9',
        application_id: '80c357d4-fdb0-4e6d-a5c5-89fda0ddefa5',

        role: {
            id: '3bd8a3c3-b93f-45ef-8cba-3bfa000782a9',
            name: 'DM Admin',
            application_type: 'APPLICATION_DM'
        }
    },
    {
        id: '389321c3-e868-4560-9973-34a842959af6',
        user_id: '3880bcd5-c81e-4c6d-b6b7-f0caf739d82b',
        role_id: '53d56a9e-a639-4977-b665-5414932cc269',
        application_id: '80c357d4-fdb0-4e6d-a5c5-89fda0ddefa5',

        role: {
            id: '53d56a9e-a639-4977-b665-5414932cc269',
            name: 'DM Full',
            application_type: 'APPLICATION_DM'
        }
    },
    {
        id: '69f0b1e8-ac07-4f53-9aac-d36b4f14cfe8',
        user_id: '3880bcd5-c81e-4c6d-b6b7-f0caf739d82b',
        role_id: '9319400a-6b96-46f5-8449-20a9ae715172',
        application_id: '888871e6-649c-4471-86ce-d34a1863e382',

        role: {
            id: '9319400a-6b96-46f5-8449-20a9ae715172',
            name: '1 PLT405 Test 10 zach',
            application_type: 'APPLICATION_RBAC'
        }
    },
    {
        id: '7c44246d-85c8-49b5-b18e-999cf63933a2',
        user_id: '3880bcd5-c81e-4c6d-b6b7-f0caf739d82b',
        role_id: 'dd433ae4-6711-4de6-8c51-4859613763c5',
        application_id: '888871e6-649c-4471-86ce-d34a1863e382',

        role: {
            id: 'dd433ae4-6711-4de6-8c51-4859613763c5',
            name: '1 role 1000',
            application_type: 'APPLICATION_RBAC'
        }
    },
    {
        id: '7cbd5ee5-91f8-4477-b7f8-c8e2808c9894',
        user_id: '3880bcd5-c81e-4c6d-b6b7-f0caf739d82b',
        role_id: 'fb364d8a-2b7d-4065-90e9-9f3a1e93ff8e',
        application_id: '888871e6-649c-4471-86ce-d34a1863e382',

        role: {
            id: 'fb364d8a-2b7d-4065-90e9-9f3a1e93ff8e',
            name: 'Application ADM',
            application_type: 'APPLICATION_RBAC'
        }
    }
];

//1 transform all objects in the array to 
 /*    {
        roleId: ...,
        roleName: ...,
        applicationId: ...,
        applicationType: ...
    }
 */
//2 devolver un array con solo las aplicaciones "APPLICATION_DM"
//3 verificar si existe en el array una applicacion con el id bc71ddc7-6dae-445a-ba68-0d4107763c27
// y el roleName MD Admin