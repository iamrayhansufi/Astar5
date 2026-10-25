"use client";

import { useState } from "react";
import { supportOptions } from "@/lib/content";

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; message: string }
  | { status: "error"; message: string }
  | { status: "not_connected"; message: string };

type FieldErrors = Record<string, string>;

const initialValues = {
  fullName: "",
  businessEmail: "",
  companyName: "",
  website: "",
  market: "",
  phone: "",
  supportRequired: "",
  coverage: "",
  description: "",
  consent: false,
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [state, setState] = useState<FormState>({ status: "idle" });

  function validate() {
    const next: FieldErrors = {};
    if (!values.fullName.trim()) next.fullName = "Enter your full name.";
    if (!values.businessEmail.trim()) {
      next.businessEmail = "Enter a business email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.businessEmail)) {
      next.businessEmail = "Enter a valid email address.";
    }
    if (!values.companyName.trim()) {
      next.companyName = "Enter your company or tax brand name.";
    }
    if (values.website && !/^https?:\/\/.+\..+/.test(values.website)) {
      next.website = "Enter a full website URL, including https://.";
    }
    if (!values.supportRequired) {
      next.supportRequired = "Select the type of support you need.";
    }
    if (!values.description.trim()) {
      next.description = "Briefly describe your requirements.";
    } else if (values.description.trim().length < 20) {
      next.description = "Please add a little more detail (at least 20 characters).";
    }
    if (!values.consent) {
      next.consent = "Consent is required so we can respond to this enquiry.";
    }
    return next;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setState({ status: "idle" });
      return;
    }

    setState({ status: "submitting" });

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const payload = (await response.json()) as {
        message?: string;
        code?: string;
      };

      if (response.status === 503 || payload.code === "NOT_CONNECTED") {
        setState({
          status: "not_connected",
          message:
            payload.message ??
            "This enquiry form is not connected to a delivery service yet. Your details were validated, but they have not been sent.",
        });
        return;
      }

      if (!response.ok) {
        setState({
          status: "error",
          message:
            payload.message ??
            "The enquiry could not be sent. Please try again shortly.",
        });
        return;
      }

      setValues(initialValues);
      setState({
        status: "success",
        message:
          payload.message ??
          "Your enquiry has been sent. Our team will review it and respond if the requirement is relevant.",
      });
    } catch {
      setState({
        status: "error",
        message:
          "The enquiry could not be sent. Check your connection and try again.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <Field
        id="fullName"
        label="Full name"
        required
        value={values.fullName}
        error={errors.fullName}
        onChange={(value) => setValues((current) => ({ ...current, fullName: value }))}
      />
      <Field
        id="businessEmail"
        label="Business email"
        type="email"
        required
        value={values.businessEmail}
        error={errors.businessEmail}
        onChange={(value) =>
          setValues((current) => ({ ...current, businessEmail: value }))
        }
      />
      <Field
        id="companyName"
        label="Company or tax brand name"
        required
        value={values.companyName}
        error={errors.companyName}
        onChange={(value) =>
          setValues((current) => ({ ...current, companyName: value }))
        }
      />
      <Field
        id="website"
        label="Business website"
        type="url"
        value={values.website}
        error={errors.website}
        hint="Optional. Include https://"
        onChange={(value) => setValues((current) => ({ ...current, website: value }))}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="market"
          label="Country or primary market"
          value={values.market}
          onChange={(value) => setValues((current) => ({ ...current, market: value }))}
        />
        <Field
          id="phone"
          label="Phone number"
          type="tel"
          value={values.phone}
          hint="Optional"
          onChange={(value) => setValues((current) => ({ ...current, phone: value }))}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="supportRequired" className="block text-base font-medium text-navy-deep">
          Support required <span className="text-error">*</span>
        </label>
        <select
          id="supportRequired"
          value={values.supportRequired}
          onChange={(event) =>
            setValues((current) => ({
              ...current,
              supportRequired: event.target.value,
            }))
          }
          className={inputClass(errors.supportRequired)}
          aria-invalid={Boolean(errors.supportRequired)}
          aria-describedby={errors.supportRequired ? "supportRequired-error" : undefined}
        >
          <option value="">Select a support type</option>
          {supportOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.supportRequired ? (
          <p id="supportRequired-error" className="text-sm text-error">
            {errors.supportRequired}
          </p>
        ) : null}
      </div>
      <Field
        id="coverage"
        label="Approximate call volume and preferred coverage"
        value={values.coverage}
        hint="Optional. Example: 80-120 calls a day during tax season, weekday US hours."
        onChange={(value) => setValues((current) => ({ ...current, coverage: value }))}
      />
      <div className="space-y-2">
        <label htmlFor="description" className="block text-base font-medium text-navy-deep">
          Brief description of your requirements <span className="text-error">*</span>
        </label>
        <textarea
          id="description"
          rows={5}
          value={values.description}
          onChange={(event) =>
            setValues((current) => ({ ...current, description: event.target.value }))
          }
          className={inputClass(errors.description)}
          aria-invalid={Boolean(errors.description)}
          aria-describedby={errors.description ? "description-error" : "description-hint"}
        />
        <p id="description-hint" className="text-sm text-muted">
          Do not include taxpayer names, Social Security numbers, tax returns, bank details, or passwords.
        </p>
        {errors.description ? (
          <p id="description-error" className="text-sm text-error">
            {errors.description}
          </p>
        ) : null}
      </div>
      <div className="space-y-2">
        <label className="flex items-start gap-3 text-base text-body">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(event) =>
              setValues((current) => ({ ...current, consent: event.target.checked }))
            }
            className="mt-1 h-4 w-4 accent-navy"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <span>
            I consent to be contacted about this business enquiry. I confirm that this form does not contain sensitive taxpayer information.
          </span>
        </label>
        {errors.consent ? (
          <p id="consent-error" className="text-sm text-error">
            {errors.consent}
          </p>
        ) : null}
      </div>
      {state.status === "success" ? (
        <StatusBox tone="success">{state.message}</StatusBox>
      ) : null}
      {state.status === "error" ? (
        <StatusBox tone="error">{state.message}</StatusBox>
      ) : null}
      {state.status === "not_connected" ? (
        <StatusBox tone="notice">{state.message}</StatusBox>
      ) : null}
      <button
        type="submit"
        disabled={state.status === "submitting"}
        className="inline-flex min-h-12 items-center justify-center rounded-md bg-navy px-6 py-3 text-base font-medium text-white transition-colors hover:bg-navy-mid disabled:cursor-not-allowed disabled:opacity-70"
      >
        {state.status === "submitting" ? "Sending enquiry..." : "Submit Business Enquiry"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required = false,
  error,
  hint,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  error?: string;
  hint?: string;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-base font-medium text-navy-deep">
        {label}
        {required ? <span className="text-error"> *</span> : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={inputClass(error)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
      />
      {hint ? (
        <p id={`${id}-hint`} className="text-sm text-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function StatusBox({
  children,
  tone,
}: {
  children: string;
  tone: "success" | "error" | "notice";
}) {
  const styles = {
    success: "border-navy/15 bg-ice text-navy-deep",
    error: "border-error/20 bg-[#fdf2f2] text-error",
    notice: "border-navy/10 bg-paper text-navy-deep",
  };

  return (
    <p className={`rounded-md border px-4 py-3 text-base leading-relaxed ${styles[tone]}`} role="status">
      {children}
    </p>
  );
}

function inputClass(error?: string) {
  return `w-full rounded-md border bg-white px-3.5 py-3 text-base text-navy-deep ${
    error ? "border-error" : "border-line"
  }`;
}
