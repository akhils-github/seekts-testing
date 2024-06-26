import React from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { customSelectStyles } from "../../utils/customStyles";

export default function EmploymentDetail() {
  const { register, control } = useForm();
  return (
    <>
      <div className=" bg-white my-2 px-20 py-6 flex flex-col gap-2 rounded">
        <h5>Your Profile Headline</h5>
        <p>Give a small description to explain you better.</p>
        <input
          type="text"
          name=""
          id=""
          className="input-box"
          placeholder="Budling Designer in construction / Civil Engineering with 4 years experience"
        />
      </div>
      <div className="bg-white px-16 py-6">
        <div className="px-3 pb-6">
          <h5>Your current or latest Employment Details</h5>
          <p>
            Give insights of your professional journey. We will make it more
            colorful!
          </p>
        </div>
        <form className="flex flex-col gap-y-4 max-w-xl">
          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Industry
            </label>
            <Controller
              name="state"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  required
                  // selected={selectedState}
                  // value={selectedState}
                  // onChange={(selectedOption) => {
                  //   handleState(selectedOption);
                  //   field.onChange(selectedOption);
                  // }}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  // options={stateLists}
                  isSearchable={true}
                  styles={customSelectStyles}
                  placeholder="Select"
                  className="rounded border border-[#C7C7C7] w-full focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
                />
              )}
            />
            {/* {errors.state && (
            <span className="text-xs font-medium text-red-500">
              {errors.state?.message}
            </span>
          )} */}
                      
          </div>
          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Sub-Industry
            </label>
            <Controller
              name="state"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  required
                  // selected={selectedState}
                  // value={selectedState}
                  // onChange={(selectedOption) => {
                  //   handleState(selectedOption);
                  //   field.onChange(selectedOption);
                  // }}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  // options={stateLists}
                  isSearchable={true}
                  styles={customSelectStyles}
                  placeholder="Select"
                  className="rounded border border-[#C7C7C7] w-full focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
                />
              )}
            />
            {/* {errors.state && (
            <span className="text-xs font-medium text-red-500">
              {errors.state?.message}
            </span>
          )} */}
                      
          </div>
          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Functional Area
            </label>
            <Controller
              name="state"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  required
                  // selected={selectedState}
                  // value={selectedState}
                  // onChange={(selectedOption) => {
                  //   handleState(selectedOption);
                  //   field.onChange(selectedOption);
                  // }}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  // options={stateLists}
                  isSearchable={true}
                  styles={customSelectStyles}
                  placeholder="Select"
                  className="rounded border border-[#C7C7C7] w-full focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
                />
              )}
            />
            {/* {errors.state && (
            <span className="text-xs font-medium text-red-500">
              {errors.state?.message}
            </span>
          )} */}
                      
          </div>
          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Designation
            </label>
            <input type="text" className="input-box" />
            {/* {errors.state && (
            <span className="text-xs font-medium text-red-500">
              {errors.state?.message}
            </span>
          )} */}
                      
          </div>

          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Employer Name
            </label>
            <input type="text" className="input-box" />
            {/* {errors.state && (
            <span className="text-xs font-medium text-red-500">
              {errors.state?.message}
            </span>
          )} */}
                      
          </div>
          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Functional Area
            </label>
            <div className="grid grid-cols-2 gap-6 ">
              <Controller
                name="state"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    required
                    // selected={selectedState}
                    // value={selectedState}
                    // onChange={(selectedOption) => {
                    //   handleState(selectedOption);
                    //   field.onChange(selectedOption);
                    // }}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    // options={stateLists}
                    isSearchable={true}
                    styles={customSelectStyles}
                    placeholder="Select"
                    className="rounded border border-[#C7C7C7] w-full focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
                  />
                )}
              />
              {/* {errors.state && (
            <span className="text-xs font-medium text-red-500">
              {errors.state?.message}
            </span>
          )} */}
              <Controller
                name="state"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    required
                    // selected={selectedState}
                    // value={selectedState}
                    // onChange={(selectedOption) => {
                    //   handleState(selectedOption);
                    //   field.onChange(selectedOption);
                    // }}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    // options={stateLists}
                    isSearchable={true}
                    styles={customSelectStyles}
                    placeholder="Select"
                    className="rounded border border-[#C7C7C7] w-full focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
                  />
                )}
              />
              {/* {errors.state && (
          <span className="text-xs font-medium text-red-500">
            {errors.state?.message}
          </span>
        )} */}
                        
            </div>
                      
          </div>
          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Are you currently working here ?
            </label>
            <div className="flex gap-5 items-center">
              <div className="rounded-full border border-[#808080] w-14 h-8 flex items-center justify-center">
                Yes
              </div>
              <div className="rounded-full border border-[#808080] w-56 h-8 flex justify-center items-center ">
                This is my latest employer
              </div>
            </div>
          </div>
          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Are you currently working here ?
            </label>
            <div className="flex gap-5 items-center w-full">
              <div>
                <Controller
                  name="state"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      required
                      // selected={selectedState}
                      // value={selectedState}
                      // onChange={(selectedOption) => {
                      //   handleState(selectedOption);
                      //   field.onChange(selectedOption);
                      // }}
                      components={{
                        IndicatorSeparator: () => null,
                      }}
                      // options={stateLists}
                      isSearchable={true}
                      styles={customSelectStyles}
                      placeholder="Select"
                      className="rounded border border-[#C7C7C7] w-40 focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="state"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      required
                      // selected={selectedState}
                      // value={selectedState}
                      // onChange={(selectedOption) => {
                      //   handleState(selectedOption);
                      //   field.onChange(selectedOption);
                      // }}
                      components={{
                        IndicatorSeparator: () => null,
                      }}
                      // options={stateLists}
                      isSearchable={true}
                      styles={customSelectStyles}
                      placeholder="Select"
                      className="rounded border border-[#C7C7C7] w-40 focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
                    />
                  )}
                />
              </div>
              <div>To</div>
              <div>
                <Controller
                  name="state"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      required
                      // selected={selectedState}
                      // value={selectedState}
                      // onChange={(selectedOption) => {
                      //   handleState(selectedOption);
                      //   field.onChange(selectedOption);
                      // }}
                      components={{
                        IndicatorSeparator: () => null,
                      }}
                      // options={stateLists}
                      isSearchable={true}
                      styles={customSelectStyles}
                      placeholder="Select"
                      className="rounded border border-[#C7C7C7] w-40 focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="state"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      required
                      // selected={selectedState}
                      // value={selectedState}
                      // onChange={(selectedOption) => {
                      //   handleState(selectedOption);
                      //   field.onChange(selectedOption);
                      // }}
                      components={{
                        IndicatorSeparator: () => null,
                      }}
                      // options={stateLists}
                      isSearchable={true}
                      styles={customSelectStyles}
                      placeholder="Select"
                      className="rounded border border-[#C7C7C7] w-40 focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
                    />
                  )}
                />
              </div>
            </div>
          </div>
          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Are you currently working here ?
            </label>
            <div className="grid grid-cols-2 gap-4 items-center">
              <Controller
                name="state"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    required
                    // selected={selectedState}
                    // value={selectedState}
                    // onChange={(selectedOption) => {
                    //   handleState(selectedOption);
                    //   field.onChange(selectedOption);
                    // }}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    // options={stateLists}
                    isSearchable={true}
                    styles={customSelectStyles}
                    placeholder="Select"
                    className="rounded border border-[#C7C7C7] w-full focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
                  />
                )}
              />
              <Controller
                name="state"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    required
                    // selected={selectedState}
                    // value={selectedState}
                    // onChange={(selectedOption) => {
                    //   handleState(selectedOption);
                    //   field.onChange(selectedOption);
                    // }}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    // options={stateLists}
                    isSearchable={true}
                    styles={customSelectStyles}
                    placeholder="Select"
                    className="rounded border border-[#C7C7C7] w-full focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
                  />
                )}
              />
            </div>
          </div>
        </form>
      </div>
      <div className=" bg-white my-2 px-20 py-6 flex flex-col gap-2 rounded">
        <h5>Your Profile Headline</h5>
        <p>Give a small description to explain you better.</p>
        <input
          type="text"
          name=""
          id=""
          className="input-box"
          placeholder="Budling Designer in construction / Civil Engineering with 4 years experience"
        />
      </div>
    </>
  );
}
