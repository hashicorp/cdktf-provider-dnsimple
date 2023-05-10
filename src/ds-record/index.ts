// https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.1/docs/resources/ds_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DsRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.1/docs/resources/ds_record#algorithm DsRecord#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.1/docs/resources/ds_record#digest DsRecord#digest}
  */
  readonly digest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.1/docs/resources/ds_record#digest_type DsRecord#digest_type}
  */
  readonly digestType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.1/docs/resources/ds_record#domain DsRecord#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.1/docs/resources/ds_record#keytag DsRecord#keytag}
  */
  readonly keytag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.1/docs/resources/ds_record#public_key DsRecord#public_key}
  */
  readonly publicKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.1/docs/resources/ds_record dnsimple_ds_record}
*/
export class DsRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnsimple_ds_record";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.1.1/docs/resources/ds_record dnsimple_ds_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DsRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DsRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'dnsimple_ds_record',
      terraformGeneratorMetadata: {
        providerName: 'dnsimple',
        providerVersion: '1.1.1',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._digest = config.digest;
    this._digestType = config.digestType;
    this._domain = config.domain;
    this._keytag = config.keytag;
    this._publicKey = config.publicKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // digest - computed: false, optional: true, required: false
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  public resetDigest() {
    this._digest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }

  // digest_type - computed: false, optional: true, required: false
  private _digestType?: string; 
  public get digestType() {
    return this.getStringAttribute('digest_type');
  }
  public set digestType(value: string) {
    this._digestType = value;
  }
  public resetDigestType() {
    this._digestType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestTypeInput() {
    return this._digestType;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // keytag - computed: false, optional: true, required: false
  private _keytag?: string; 
  public get keytag() {
    return this.getStringAttribute('keytag');
  }
  public set keytag(value: string) {
    this._keytag = value;
  }
  public resetKeytag() {
    this._keytag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keytagInput() {
    return this._keytag;
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      digest: cdktf.stringToTerraform(this._digest),
      digest_type: cdktf.stringToTerraform(this._digestType),
      domain: cdktf.stringToTerraform(this._domain),
      keytag: cdktf.stringToTerraform(this._keytag),
      public_key: cdktf.stringToTerraform(this._publicKey),
    };
  }
}
