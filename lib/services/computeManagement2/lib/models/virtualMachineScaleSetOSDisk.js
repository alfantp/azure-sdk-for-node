/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the VirtualMachineScaleSetOSDisk class.
 * @constructor
 * Describes a virtual machine scale set operating system disk.
 * @member {string} name the disk name.
 * 
 * @member {string} [caching] the caching type. Possible values include:
 * 'None', 'ReadOnly', 'ReadWrite'
 * 
 * @member {string} createOption the create option. Possible values include:
 * 'fromImage', 'empty', 'attach'
 * 
 * @member {string} [osType] the Operating System type. Possible values
 * include: 'Windows', 'Linux'
 * 
 * @member {object} [image] the Source User Image VirtualHardDisk. This
 * VirtualHardDisk will be copied before using it to attach to the Virtual
 * Machine.If SourceImage is provided, the destination VirtualHardDisk should
 * not exist.
 * 
 * @member {string} [image.uri] the virtual hard disk's uri. It should be a
 * valid Uri to a virtual hard disk.
 * 
 * @member {array} [vhdContainers] the list of virtual hard disk container
 * uris.
 * 
 */
function VirtualMachineScaleSetOSDisk() {
}

/**
 * Defines the metadata of VirtualMachineScaleSetOSDisk
 *
 * @returns {object} metadata of VirtualMachineScaleSetOSDisk
 *
 */
VirtualMachineScaleSetOSDisk.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'VirtualMachineScaleSetOSDisk',
    type: {
      name: 'Composite',
      className: 'VirtualMachineScaleSetOSDisk',
      modelProperties: {
        name: {
          required: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        caching: {
          required: false,
          serializedName: 'caching',
          type: {
            name: 'Enum',
            allowedValues: [ 'None', 'ReadOnly', 'ReadWrite' ]
          }
        },
        createOption: {
          required: true,
          serializedName: 'createOption',
          type: {
            name: 'Enum',
            allowedValues: [ 'fromImage', 'empty', 'attach' ]
          }
        },
        osType: {
          required: false,
          serializedName: 'osType',
          type: {
            name: 'Enum',
            allowedValues: [ 'Windows', 'Linux' ]
          }
        },
        image: {
          required: false,
          serializedName: 'image',
          type: {
            name: 'Composite',
            className: 'VirtualHardDisk'
          }
        },
        vhdContainers: {
          required: false,
          serializedName: 'vhdContainers',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = VirtualMachineScaleSetOSDisk;
