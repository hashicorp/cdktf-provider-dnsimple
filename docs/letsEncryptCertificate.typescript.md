# `letsEncryptCertificate` Submodule <a name="`letsEncryptCertificate` Submodule" id="@cdktf/provider-dnsimple.letsEncryptCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LetsEncryptCertificate <a name="LetsEncryptCertificate" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate"></a>

Represents a {@link https://www.terraform.io/docs/providers/dnsimple/r/lets_encrypt_certificate dnsimple_lets_encrypt_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.Initializer"></a>

```typescript
import { letsEncryptCertificate } from '@cdktf/provider-dnsimple'

new letsEncryptCertificate.LetsEncryptCertificate(scope: Construct, id: string, config: LetsEncryptCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig">LetsEncryptCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig">LetsEncryptCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.resetContactId">resetContactId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.resetDomainId">resetDomainId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.putTimeouts"></a>

```typescript
public putTimeouts(value: LetsEncryptCertificateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeouts">LetsEncryptCertificateTimeouts</a>

---

##### `resetContactId` <a name="resetContactId" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.resetContactId"></a>

```typescript
public resetContactId(): void
```

##### `resetDomainId` <a name="resetDomainId" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.resetDomainId"></a>

```typescript
public resetDomainId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.isConstruct"></a>

```typescript
import { letsEncryptCertificate } from '@cdktf/provider-dnsimple'

letsEncryptCertificate.LetsEncryptCertificate.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.isTerraformElement"></a>

```typescript
import { letsEncryptCertificate } from '@cdktf/provider-dnsimple'

letsEncryptCertificate.LetsEncryptCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.isTerraformResource"></a>

```typescript
import { letsEncryptCertificate } from '@cdktf/provider-dnsimple'

letsEncryptCertificate.LetsEncryptCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.authorityIdentifier">authorityIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.csr">csr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference">LetsEncryptCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.years">years</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.autoRenewInput">autoRenewInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.contactIdInput">contactIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeouts">LetsEncryptCertificateTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.autoRenew">autoRenew</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.contactId">contactId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorityIdentifier`<sup>Required</sup> <a name="authorityIdentifier" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.authorityIdentifier"></a>

```typescript
public readonly authorityIdentifier: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.csr"></a>

```typescript
public readonly csr: string;
```

- *Type:* string

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.timeouts"></a>

```typescript
public readonly timeouts: LetsEncryptCertificateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference">LetsEncryptCertificateTimeoutsOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `years`<sup>Required</sup> <a name="years" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.years"></a>

```typescript
public readonly years: number;
```

- *Type:* number

---

##### `autoRenewInput`<sup>Optional</sup> <a name="autoRenewInput" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.autoRenewInput"></a>

```typescript
public readonly autoRenewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `contactIdInput`<sup>Optional</sup> <a name="contactIdInput" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.contactIdInput"></a>

```typescript
public readonly contactIdInput: number;
```

- *Type:* number

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: LetsEncryptCertificateTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeouts">LetsEncryptCertificateTimeouts</a> | cdktf.IResolvable

---

##### `autoRenew`<sup>Required</sup> <a name="autoRenew" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.autoRenew"></a>

```typescript
public readonly autoRenew: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `contactId`<sup>Required</sup> <a name="contactId" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.contactId"></a>

```typescript
public readonly contactId: number;
```

- *Type:* number

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LetsEncryptCertificateConfig <a name="LetsEncryptCertificateConfig" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.Initializer"></a>

```typescript
import { letsEncryptCertificate } from '@cdktf/provider-dnsimple'

const letsEncryptCertificateConfig: letsEncryptCertificate.LetsEncryptCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.autoRenew">autoRenew</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dnsimple/r/lets_encrypt_certificate#auto_renew LetsEncryptCertificate#auto_renew}. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dnsimple/r/lets_encrypt_certificate#name LetsEncryptCertificate#name}. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.contactId">contactId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dnsimple/r/lets_encrypt_certificate#contact_id LetsEncryptCertificate#contact_id}. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.domainId">domainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dnsimple/r/lets_encrypt_certificate#domain_id LetsEncryptCertificate#domain_id}. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeouts">LetsEncryptCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoRenew`<sup>Required</sup> <a name="autoRenew" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.autoRenew"></a>

```typescript
public readonly autoRenew: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dnsimple/r/lets_encrypt_certificate#auto_renew LetsEncryptCertificate#auto_renew}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dnsimple/r/lets_encrypt_certificate#name LetsEncryptCertificate#name}.

---

##### `contactId`<sup>Optional</sup> <a name="contactId" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.contactId"></a>

```typescript
public readonly contactId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dnsimple/r/lets_encrypt_certificate#contact_id LetsEncryptCertificate#contact_id}.

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dnsimple/r/lets_encrypt_certificate#domain_id LetsEncryptCertificate#domain_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LetsEncryptCertificateTimeouts;
```

- *Type:* <a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeouts">LetsEncryptCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dnsimple/r/lets_encrypt_certificate#timeouts LetsEncryptCertificate#timeouts}

---

### LetsEncryptCertificateTimeouts <a name="LetsEncryptCertificateTimeouts" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeouts.Initializer"></a>

```typescript
import { letsEncryptCertificate } from '@cdktf/provider-dnsimple'

const letsEncryptCertificateTimeouts: letsEncryptCertificate.LetsEncryptCertificateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dnsimple/r/lets_encrypt_certificate#read LetsEncryptCertificate#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/dnsimple/r/lets_encrypt_certificate#read LetsEncryptCertificate#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### LetsEncryptCertificateTimeoutsOutputReference <a name="LetsEncryptCertificateTimeoutsOutputReference" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.Initializer"></a>

```typescript
import { letsEncryptCertificate } from '@cdktf/provider-dnsimple'

new letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeouts">LetsEncryptCertificateTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LetsEncryptCertificateTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-dnsimple.letsEncryptCertificate.LetsEncryptCertificateTimeouts">LetsEncryptCertificateTimeouts</a> | cdktf.IResolvable

---


