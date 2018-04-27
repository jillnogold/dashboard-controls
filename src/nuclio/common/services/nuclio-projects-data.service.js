(function () {
    'use strict';

    angular.module('iguazio.dashboard-controls')
        .factory('NuclioProjectsDataService', NuclioProjectsDataService);

    function NuclioProjectsDataService(NuclioClientService) {
        var service = {
            createProject: createProject,
            deleteProject: deleteProject,
            getProject: getProject,
            getProjects: getProjects,
            updateProject: updateProject
        };

        return service;

        //
        // Public methods
        //

        /**
         * Creates a new project
         * @param {Object} project - the project to create
         */
        function createProject(project) {
            var headers = {
                'Content-Type': 'application/json'
            };
            var data = {
                metadata: {
                    namespace: project.metadata.namespace
                },
                spec: project.spec
            };

            return NuclioClientService.makeRequest(
                {
                    method: 'POST',
                    url: NuclioClientService.buildUrlWithPath('projects', ''),
                    headers: headers,
                    data: data,
                    withCredentials: false
                })
                .then(function (response) {
                    return response.data;
                });
        }

        /**
         * Deletes a project
         * @param {Object} project - the project to create
         */
        function deleteProject(project) {
            var headers = {
                'Content-Type': 'application/json'
            };
            var data = {
                metadata: project.metadata
            };

            return NuclioClientService.makeRequest(
                {
                    method: 'DELETE',
                    url: NuclioClientService.buildUrlWithPath('projects', ''),
                    headers: headers,
                    data: data,
                    withCredentials: false
                })
                .then(function (response) {
                    return response.data;
                });
        }

        /**
         * Gets all projects
         * @returns {Promise}
         */
        function getProjects() {
            var headers = {
                'x-nuclio-project-namespace': 'nuclio'
            };

            return NuclioClientService.makeRequest(
                {
                    method: 'GET',
                    url: NuclioClientService.buildUrlWithPath('projects', ''),
                    headers: headers,
                    withCredentials: false
                })
                .then(function (response) {
                    return response.data;
                });
        }

        /**
         * Gets project by id
         * @param {string} id - id of project
         * @returns {Promise}
         */
        function getProject(id) {
            var headers = {
                'x-nuclio-project-namespace': 'nuclio'
            };

            return NuclioClientService.makeRequest(
                {
                    method: 'GET',
                    url: NuclioClientService.buildUrlWithPath('projects/', id),
                    headers: headers,
                    withCredentials: false
                })
                .then(function (response) {
                    return response.data;
                });
        }

        /**
         * Updates a new project
         * @param {Object} project - the project to update
         */
        function updateProject(project) {
            var headers = {
                'Content-Type': 'application/json'
            };
            var data = {
                metadata: project.metadata,
                spec: project.spec
            };

            return NuclioClientService.makeRequest(
                {
                    method: 'PUT',
                    url: NuclioClientService.buildUrlWithPath('projects', ''),
                    headers: headers,
                    data: data,
                    withCredentials: false
                })
                .then(function (response) {
                    return response.data;
                });
        }
    }
}());
